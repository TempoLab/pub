
export function DarkButton(props: JSX.HTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            class="px-2 py-1 border(gray-100 2) dark:border(gray-900 2) hover:bg-gray-200 dark:hover:bg-gray-800"
        />
    );
}
