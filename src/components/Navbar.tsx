import { FloatingNav } from "./ui/floating-navbar";

export function FloatingNavDemo() {
    const navItems = [
        { name: "Home", link: "/" },
        { name: "Products", dropdownItems: [{ name: "Home", link: "/" }, { name: "Contact", link: "/contact" }] },
        { name: "Resources", dropdownItems: [{ name: "Home", link: "/" }, { name: "Contact", link: "/contact" }] },
        { name: "Pricing", link: "/" },
    ];

    return (
        <div className="fixed top-10 w-full max-w-screen-xl mx-auto z-50">
            <FloatingNav navItems={navItems} />
        </div>
    );
}
