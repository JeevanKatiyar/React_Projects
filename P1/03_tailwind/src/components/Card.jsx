import React from "react";

function Card() {
  return (
    <div>
      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGjaV6nAOLnL5z5D_L2X1Z4fnc9RC3HQ5Yew&s"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio vel
              eveniet cumque perspiciatis maxime voluptates aspernatur
              accusantium modi eligendi, aut voluptatem quae laudantium sit
              alias aliquid amet iure facilis vero.
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">Jeevan </div>
            <div class="text-slate-700 dark:text-slate-500">
              Front Engineer, Freelancer
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
