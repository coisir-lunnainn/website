<script lang="ts">
  let editing = false;
  function enableEditing() {
    editing = true;
    document.querySelectorAll("[data-editable]").forEach((el) => {
      el.setAttribute("contenteditable", "true");
    });
  }
  function save() {
    editing = false;
    document.querySelectorAll("[data-editable]").forEach((el) => {
      console.log(el.dataset.editable, el.innerHTML);
      el.setAttribute("contenteditable", "false");
    });
  }
</script>

<div
  class="rounded-full fixed bg-black shadow-lg bottom-3 right-4 {editing
    ? 'bg-green-500'
    : ''}"
>
  <button class="p-3 flex gap-2" on:click={editing ? save : enableEditing}>
    {#if editing}
      <span class="text-white font-normal pl-2">Save</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 text-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m4.5 12.75 6 6 9-13.5"
        />
      </svg>
    {:else}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 text-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        />
      </svg>
    {/if}
  </button>
</div>
