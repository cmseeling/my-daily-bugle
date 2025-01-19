<script lang="ts">
  import { Button, Label } from 'bits-ui';
  import { css } from 'styled-system/css';

  interface Props {
    onSubmit: (value: string) => void;
  }

  let { onSubmit }: Props = $props();

  let inputValue = $state('');
</script>

<div
  class={css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  })}
>
  <Label.Root id="name-input-label" for="name-input">Add a name:</Label.Root>
  <div>
    <input id="name-input" type="text" bind:value={inputValue} />
    <Button.Root
      id="name-input-button"
      onclick={() => {
        onSubmit(inputValue);
      }}>Add!</Button.Root
    >
  </div>
</div>
