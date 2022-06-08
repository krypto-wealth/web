/// <reference types="react" />
interface PasswordProps {
    password: string;
    setPassword: React.Dispatch<string>;
    isPasswordValid: boolean;
    setIsPasswordValid: React.Dispatch<boolean>;
}
export declare const usePassword: () => PasswordProps;
export {};
