import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  name: string;
  email: string;
  pass: string;
};

type UserStore = {
  user: User | null;
  register: (newUser: User) => void;
  login: (email: string, pass: string) => boolean;
  logout: () => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: null,

      register: (newUser) => set({ user: newUser }),

      login: (email, pass) => {
        const savedUser = get().user;
        if (!savedUser) return false;
        return savedUser.email === email && savedUser.pass === pass;
      },

      logout: () => set({ user: null }),
    }),
    {
      name: "user-storage", // اسم localStorage
    }
  )
);
