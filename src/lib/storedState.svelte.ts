/** Stores state in localStorage using the given key */
export function storedState<T>(key: string, defaultValue: T): { value: T } {
    const current = $state({
        value: (JSON.parse(localStorage.getItem(key)!) as T) ?? defaultValue,
    });

    $effect(() => {
        localStorage.setItem(key, JSON.stringify(current.value));
    });

    return current;
}
