<script lang="ts">
  import { css } from "styled-system/css";

  let { children } = $props();
</script>

<div class={css({ width: "100%", maxWidth: "900px" })}>
  {@render children()}
</div>
