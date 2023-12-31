import sanityClient from "../../client";
import useSWR from "swr";
import groq from "groq";
import * as React from "react";

import Navi from "./Navi/Navi";
import Footer from './Footer/Footer'
import { Analytics } from '@vercel/analytics/react';


export default function Layout({ children }) {
    const { data: navData, error } = useSWR(groq`*[_type == "NaviEntry"]`, query =>
        sanityClient.fetch(query)
    );

    React.useEffect(() => {
        SmoothScroll(document, 30, 12);
    })

    function SmoothScroll(target, speed, smooth) {
        if (target === document)
            target = (document.scrollingElement
                || document.documentElement
                || document.body.parentNode
                || document.body) // cross browser support for document scrolling

        var moving = false
        var pos = target.scrollTop
        var frame = target === document.body
            && document.documentElement
            ? document.documentElement
            : target // safari is the new IE

        target.addEventListener('mousewheel', scrolled, { passive: false })
        target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

        function scrolled(e) {
            e.preventDefault(); // disable default scrolling

            var delta = normalizeWheelDelta(e)

            pos += -delta * speed
            pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

            if (!moving) update()
        }

        function normalizeWheelDelta(e) {
            if (e.detail) {
                if (e.wheelDelta)
                    return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
                else
                    return -e.detail / 3 // Firefox
            } else
                return e.wheelDelta / 120 // IE,Safari,Chrome
        }

        function update() {
            moving = true

            var delta = (pos - target.scrollTop) / smooth

            target.scrollTop += delta

            if (Math.abs(delta) > 0.5)
                requestFrame(update)
            else
                moving = false
        }

        var requestFrame = function () { // requestAnimationFrame cross browser
            return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (func) {
                    window.setTimeout(func, 1000 / 50);
                }
            );
        }()
    }


    // TODO error handling + loading
    if (error) return <div>Failed</div>
    if (!navData) return <div className='loadingScreen'></div>;

    return (
        <>
            <Navi naviItems={navData} />
            <main className="main">
                <div className="mainMainWrapper">{children}</div>
            </main>
            <Footer />
            <Analytics />
        </>
    )
}

export async function getStaticProps() {
    const animals = await sanityClient.fetch(`*[_type == "animal"]`);
    const navigation = await sanityClient.fetch(`*[_type == "NaviEntry"]`);

    return {
        props: {
            animals,
            navigation,
        }
    };
}

