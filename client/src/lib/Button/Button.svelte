<script lang="ts">
  import { Button } from "bits-ui";
  import type { ButtonProps, ButtonEvents, ButtonSlots } from "bits-ui";
  import { css } from "styled-system/css";

  let { children, otherProps }: ButtonProps = $props();
</script>

<Button.Root
  {...otherProps}
  data-component-id="button"
  class={css({
    borderWidth: "1px",
    borderRadius: "md",
    paddingX: "3",
    paddingY: "1",
  })}
>
  {@render children()}
</Button.Root>
