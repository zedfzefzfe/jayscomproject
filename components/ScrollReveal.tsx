"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
    const pathname = usePathname();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        const elements = document.querySelectorAll(".reveal, .fade-in-up");
        elements.forEach((el) => observer.observe(el));

        // Handle magnetic buttons if any
        const magneticBtns = document.querySelectorAll(".magnetic-btn");
        magneticBtns.forEach((btn) => {
            btn.addEventListener("mousemove", (e: any) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                (btn as HTMLElement).style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });

            btn.addEventListener("mouseleave", () => {
                (btn as HTMLElement).style.transform = "translate(0, 0)";
            });
        });

        return () => {
            observer.disconnect();
            // Cleanup event listeners if complex, but for simple magnetic effect it's okay-ish here
            // Ideally move magnetic logic to a separate directive/hook if used extensively
        };
    }, [pathname]); // Re-run on route change

    return null;
}
