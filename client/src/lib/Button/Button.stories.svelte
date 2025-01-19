<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import { fn } from "@storybook/test";
  import Button from "./Button.svelte";

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: "Library Components/Button",
    component: Button,
    // tags: ['autodocs'],
    // args: {
    //   href: undefined,
    //   ref: undefined,
    //   onclick: () => console.log("Button clicked"),
    // },
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Default">
  <Button>Click me</Button>
</Story>
