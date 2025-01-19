<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import ForumPost from "./ForumPost.svelte";
  import { fn } from "@storybook/test";
  import ThemeDecorator from "$storybook/ThemeDecorator.svelte";
  import LargeWidthDecorator from "$storybook/LargeWidthDecorator.svelte";

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: "Item/ForumPost",
    component: ForumPost,
    //   tags: ['autodocs'],
    //   argTypes: {
    //     backgroundColor: { control: 'color' },
    //     size: {
    //       control: { type: 'select' },
    //       options: ['small', 'medium', 'large'],
    //     },
    //   },
    args: {
      commentCount: 368,
      discussionUrl:
        "https://www.reddit.com/r/learnprogramming/comments/6fto5j/how_to_start_learning_to_code_when_you_dont_know/",
      score: 5800,
      showThumbnail: false,
      tags: [],
      timePosted: new Date(2017, 6, 17, 9, 13, 31),
      title: "How to start learning to code when you don't know where to start",
    },
    decorators: [() => ThemeDecorator, () => LargeWidthDecorator],
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Discussion" />

<Story name="Tags" args={{ tags: ["programming", "development"] }} />

<Story
  name="Thumbnail"
  args={{
    commentCount: 1607,
    discussionUrl:
      "https://www.reddit.com/r/aww/comments/awyf90/husband_said_he_was_going_to_make_a_bed_frame_i/",
    score: 182000,
    showThumbnail: true,
    thumbnailUrl:
      "https://a.thumbs.redditmedia.com/pH6JO2SQH_7pKvXYhyIWTNppcqvSQG1TDfd3UXM8rO4.jpg",
    tags: [],
    timePosted: new Date(2019, 3, 3, 20, 51, 57),
    title:
      "Husband said he was going to make a bed frame. I thought it was for our new mattress.... It was for the cat.",
  }}
/>

<Story
  name="External Link"
  args={{
    commentCount: 5480,
    discussionUrl:
      "https://www.reddit.com/r/gaming/comments/1i3dn38/dragon_age_veilguard_director_leaves_ea_after/",
    score: 20200,
    showThumbnail: true,
    targetUrl:
      "https://tech4gamers.com/dragon-age-veilguard-director-leaves-ea/",
    targetUrlDomain: "tech4gamers.com",
    thumbnailUrl:
      "https://b.thumbs.redditmedia.com/JvHK_3ud5kyEdZhqut8OHyDq1IYVzL5tqh5zWPWlhFo.jpg",
    tags: [],
    timePosted: new Date(2025, 1, 17, 10, 42, 44),
    title:
      "Dragon Age Veilguard Director Leaves EA After Disappointing Attempt At Series Revival",
  }}
/>
