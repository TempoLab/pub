
interface FooterLinkProps {
    href: string;
    class: string;
}

const FooterLink: FC<FooterLinkProps> = ({
    href,
    children,
    classList = "",
}) => {
    return (
        <a
            class={`font-body text-gray-500 dark:text-gray-200 ${classList}`}
            href={href}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    );
};

export default function Footer() {
    return (
        <div class="px-4 mt-auto w-full">
            <div class="pt-4 grid grid-cols-3 border-t border-gray-300">
                <div class="pb-4 mb-4 col-span-3">
                    <ul>
                        <li>
                            <FooterLink href="https://www.linkedin.com/in/matt-solo/">
                                LinkedIn
                            </FooterLink>
                        </li>
                        <li>
                            <FooterLink href="https://github.com/TempoLab">
                                GitHub
                            </FooterLink>
                        </li>
                        <li>
                            <FooterLink href="https://twitter.com/DLTempo">
                                Twitter
                            </FooterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}