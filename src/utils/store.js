import create from "zustand";
import immer from "immer";
import { persist, createJSONStorage } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      users: [
        {
          id: 0,
          user: "Tammy",
          tweets: 777,
          followers: 100500,
          isFollowing: false,
          avatar:
            "https://cdn.pixabay.com/photo/2021/07/19/04/36/woman-6477171_960_720.jpg",
        },

        {
          id: 1,
          user: "Jennifer",
          tweets: 200,
          followers: 100,
          isFollowing: false,
          avatar:
            "https://cdn.pixabay.com/photo/2021/06/20/20/31/woman-6351965_960_720.jpg",
        },
        {
          id: 2,
          user: "Jim",
          tweets: 555,
          followers: 99999999,
          isFollowing: false,
          avatar:
            "https://cdn.pixabay.com/photo/2021/07/27/17/35/steampunk-6497478_960_720.jpg",
        },
      ],

      increaseFollowers: (id) =>
        set(
          immer((state) => {
            state.users[id].followers = state.users[id].followers + 1;
          })
        ),

      decreaseFollowers: (id) =>
        set(
          immer((state) => {
            state.users[id].followers = state.users[id].followers - 1;
          })
        ),

      toggleButton: (id) =>
        set(
          immer((state) => {
            state.users[id].isFollowing = !state.users[id].isFollowing;
          })
        ),
    }),
    {
      name: "users",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export default useStore;
