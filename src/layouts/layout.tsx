import MenuFooter from '@/components/menu-footer';
import MenuHeader from '@/components/menu-header';
import Navigation from '@/components/navigation';
import AnimatedOverlay from '@/components/animated-overlay';
import NeonCursorTrails from '@/components/neon-cursor-trails';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <AnimatedOverlay />

            <div className=" max-w-7xl mx-auto h-screen text-gray-200 flex flex-col relative overflow-hidden">
                <div className="w-full h-full grid grid-cols-9 gap-4 py-10 relative z-10">
                    {/* Menu */}
                    <div className="p-6 col-span-2 backdrop-blur-sm bg-gray/10  h-full flex flex-col justify-between ">
                        <div className="flex flex-col gap-[100px]">
                            {/* Header Menu */}
                            <MenuHeader />

                            {/* Navigation */}
                            <Navigation />
                        </div>

                        {/* Footer menu */}
                        <MenuFooter />
                    </div>

                    {/* Content using 2 cols */}
                    <div className="col-span-7 p-10 h-full max-h-screen flex flex-col justify-between overflow-y-auto backdrop-blur-sm bg-gray/10 ">
                        {/* Content Area */}
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
