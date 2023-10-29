export const render = (el: string, updated: HTMLElement | string) => {
    document.getElementById(el)!.innerHTML = "";
    document.getElementById(el)?.append(updated);
};