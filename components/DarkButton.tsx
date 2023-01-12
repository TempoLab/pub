
export function DarkButton(props: JSX.HTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            class="px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-900"
        />
    );
}
