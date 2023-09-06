function productPagenation(currentPage, total, q, category, func) {
  console.log(currentPage, total);
  let totalPage = Math.ceil(total / 20);
  let numbers = [];

  function paginationItem(item) {
    return `<li>
     <a
       onclick="func(q, item, category)"
       class="flex items-center justify-center px-3 h-8 leading-tight ${
         item === currentPage
           ? "text-blue-500 bg-blue-50"
           : "text-gray-500 bg-white"
       }   border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
     >
       ${item}
     </a>
   </li>`;
  }

  for (let i = 1; i <= totalPage; i++) {
    numbers.push(paginationItem(i));
  }

  return `<nav aria-label="Page navigation example" class="flex justify-center">
      <ul class="inline-flex -space-x-px text-sm">
        ${
          currentPage === 1
            ? ""
            : <li>
            <a
              onclick="" 
              class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
        }
        ${numbers.join("")}
        ${
          currentPage < totalPage
            ? `<li>
        <a
          onclick=""
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </a>
      </li>`
            : ""
        }
      </ul>
    </nav>`;
}
