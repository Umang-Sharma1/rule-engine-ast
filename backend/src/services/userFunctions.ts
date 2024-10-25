// services/userFunctions.ts
type UserFunction = (...args: any[]) => any;

// Example user-defined functions
export const userFunctions: Record<string, UserFunction> = {
  isPrime: (num: number): boolean => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  },
  isAdult: (age: number): boolean => age >= 18,
  // Add more user-defined functions here
};

export const addUserFunction = (name: string, func: UserFunction): void => {
  userFunctions[name] = func;
};
