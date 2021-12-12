const ColorReset = "\x1b[0m";

enum TextEffect {
    Bright = "\x1b[1m",
    Dim = "\x1b[2m",
    Underscore = "\x1b[4m",
    Blink = "\x1b[5m",
    Reverse = "\x1b[7m",
    Hidden = "\x1b[8m"
}

enum ForegroundColor {
    Black = "\x1b[30m",
    Red = "\x1b[31m",
    Green = "\x1b[32m",
    Yellow = "\x1b[33m",
    Blue = "\x1b[34m",
    Magenta = "\x1b[35m",
    Cyan = "\x1b[36m",
    White = "\x1b[37m"
}

export function logInfo(message: string): void {
    const textFormat = `${TextEffect.Underscore}${ForegroundColor.Cyan}`;
    console.log(`${textFormat}${message}${ColorReset}`);
}
