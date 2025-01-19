<script>
  import NameInput from '$components/ComboInput/ComboInput.svelte';
  import ForumPost from '$components/ForumPost/ForumPost.svelte';
  import { css } from 'styled-system/css';

  let name = $state('');
</script>

<div
  class={css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  })}
>
  <div
    class={css({
      fontSize: '2xl',
      fontWeight: 'bold',
      marginTop: '5rem'
    })}
  >
    Hello {name} 🐼!
  </div>

  <NameInput
    onSubmit={(value) => {
      name = value;
    }}
    class={css({
      marginX: '10rem'
    })}
  />
  <ForumPost
    commentCount={368}
    discussionUrl="https://www.reddit.com/r/learnprogramming/comments/6fto5j/how_to_start_learning_to_code_when_you_dont_know/"
    score={5800}
    showThumbnail={false}
    tags={[]}
    timePosted={new Date(2017, 6, 17, 9, 13, 31)}
    title="How to start learning to code when you don't know where to start"
    css={{
      marginX: '10rem'
    }}
  />
</div>
