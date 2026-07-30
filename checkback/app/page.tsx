import { FontSwitcher } from '@/components/font-switcher';
import { Typewriter } from '@/components/typewriter';

export default function Home() {
    return (
        <FontSwitcher>
            <Typewriter
                text="Hey, thanks for stopping by @funfarminguganda! We are currently working on something new, please check back later :)"
                delay={1200}
                speed={50}
            />
        </FontSwitcher>
    );
}
