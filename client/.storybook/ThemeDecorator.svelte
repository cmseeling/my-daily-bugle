<script lang="ts">
  import { css } from 'styled-system/css';

  let { children } = $props();
</script>

<div class={css({ color: 'text.regular' })}>
  {@render children()}
</div>
