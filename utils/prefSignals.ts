import { signal } from "@preact/signals";

const prefSignals = signal({
    mode: 'light'
});

const toggleMode = () => {
    const next = prefSignal.value.mode === 'light' ? 'dark' : 'light';
    prefSignal.value = {
        ...prefSignal.value,
        mode: next
    }
}

export {
    prefSignals,
    toggleMode
}