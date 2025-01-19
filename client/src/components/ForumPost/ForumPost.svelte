<script module lang="ts">
  export interface ForumPostProps extends ForumPost {
    showThumbnail?: boolean;
    css?: CssProperty;
  }
</script>

<script lang="ts">
  import { css } from 'styled-system/css';
  import type { CssProperty } from 'styled-system/types';
  import type { ForumPost } from '$api/interfaces/ForumPost';

  let {
    commentCount,
    css: cssProp,
    discussionUrl,
    score,
    showThumbnail,
    targetUrl,
    targetUrlDomain,
    thumbnailUrl,
    tags,
    timePosted,
    title
  } = $props();

  const metaDataClass = css({
    _after: {
      content: "'•'",
      color: 'text.subdued',
      margin: '0 0.5rem',
      position: 'relative'
    }
  });
</script>

<div
  class={css(
    {
      display: 'flex',
      gap: '1'
    },
    cssProp
  )}
>
  {#if showThumbnail}
    <img src={thumbnailUrl} alt={title} />
  {/if}
  <div
    class={css({
      flexGrow: 1,
      minWidth: 0
    })}
  >
    <a
      class={css({
        fontSize: '1.5rem',
        color: 'links.unread',
        _visited: { color: 'links.visited' }
      })}
      href={discussionUrl}
      target="_blank"
      rel="noreferrer">{title}</a
    >
    {#if tags.length > 0}
      <div
        class={css({
          display: 'inline-block',
          marginX: '2',
          transform: 'translateY(-0.2rem)'
        })}
      >
        <ul class={css({ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' })}>
          {#each tags as tag}
            <li
              class={css({
                rounded: 'md',
                padding: '0.1rem 0.5rem',
                fontSize: '1.1rem',
                bg: 'highlight',
                color: 'text.dark'
              })}
            >
              {tag}
            </li>
          {/each}
        </ul>
      </div>
    {/if}
    <ul
      class={css({
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        listStyle: 'none'
      })}
    >
      <li class={metaDataClass}>
        {timePosted}
      </li>
      <li class={metaDataClass}>
        {score} points
      </li>
      <li class={targetUrl ? metaDataClass : ''}>{commentCount} comments</li>
      {#if targetUrl}
        <li class={css({ minWidth: 0 })}>
          <a
            class={css({
              display: 'block',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              _after: {
                content: "'↗'",
                marginLeft: '0.5rem',
                display: 'inline-block',
                position: 'relative',
                top: '0.15rem',
                color: 'text.regular'
              }
            })}
            href={targetUrl}
            target="_blank"
            rel="noreferrer">{targetUrlDomain}</a
          >
        </li>
      {/if}
    </ul>
  </div>
</div>
