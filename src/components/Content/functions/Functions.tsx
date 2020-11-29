export const getFormat = (value:number): string => {
    return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const capitalizeTag = (tag: string): string => {
    const fLetter = tag.substring(0, 1).toUpperCase();
    return fLetter + tag.substr(1)
}

export const capitalizeName = (name: string): string => {
    const names = name.split(' ');
    let result = '';

    for (let n of names) {
        result = result + capitalizeTag(n) + ' '
    }
    return result
}