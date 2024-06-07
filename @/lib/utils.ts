import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


export const validString = (value: unknown, maxLength: number) => {
    if (!value || typeof value !== 'string' || value.length > maxLength) {
        return false
    }
    return true
}

export const getErrorMessage = (error: unknown): string => {
    let message: string
    if (error instanceof Error) {
        message = error.message
    }
    else if (error && typeof error === 'object' && 'message' in error) {
        message = String(error.message)
    } else {
        message = 'Something went wrong'
    }
    return message
}


export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 0,
});

export function formatCurrency(amount: number) {
    return CURRENCY_FORMATTER.format(amount);
}

const NUMBER_FORMATTER = new Intl.NumberFormat("en-US");

export function formatNumber(number: number) {
    return NUMBER_FORMATTER.format(number);
}
