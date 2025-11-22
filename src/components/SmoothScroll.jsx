import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const SmoothScroll = ({ children }) => {
    const scrollRef = useRef(null);
    const locomotiveScrollRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (!scrollRef.current) return;

        // Initialize Locomotive Scroll with proper configuration
        locomotiveScrollRef.current = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            smoothMobile: true, // Enabled for mobile
            resetNativeScroll: true,
            lerp: 0.1,
            multiplier: 1,
            class: 'is-inview',
            tablet: {
                smooth: true, // Enabled for tablet
                breakpoint: 1024
            },
            smartphone: {
                smooth: true // Enabled for smartphone
            }
        });

        // Dispatch custom scroll event for Navbar
        locomotiveScrollRef.current.on('scroll', (args) => {
            const scrollY = args.scroll.y;
            const event = new CustomEvent('loco-scroll', { detail: { scrollY } });
            window.dispatchEvent(event);
        });

        // Small delay to ensure proper initialization
        setTimeout(() => {
            if (locomotiveScrollRef.current) {
                locomotiveScrollRef.current.update();
            }
        }, 100);

        return () => {
            if (locomotiveScrollRef.current) {
                locomotiveScrollRef.current.destroy();
            }
        };
    }, []);

    // Update on route change
    useEffect(() => {
        if (locomotiveScrollRef.current) {
            setTimeout(() => {
                locomotiveScrollRef.current.update();
            }, 100);
        }
    }, [location]);

    return (
        <div ref={scrollRef} data-scroll-container style={{ overflow: 'hidden' }}>
            {children}
        </div>
    );
};

export default SmoothScroll;
