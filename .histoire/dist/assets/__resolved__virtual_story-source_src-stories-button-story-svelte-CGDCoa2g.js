const __resolved__virtual_storySource_srcStoriesButtonStorySvelte = `<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  export let Hst: Hst
  import '../dark.css';
  import '../light.css';
  import { Button } from '@podman-desktop/ui-svelte';

  let mode: 'dark-scheme' | 'light-scheme' = 'dark-scheme';
  let type: 'primary' | 'secondary' | 'danger' | 'link' | 'tab' = 'primary';
<\/script>

<Hst.Story>
  <div class="{mode} p-4 bg-[var(--pd-content-bg)]">
    <Button {type}>content</Button>
  </div>

  <svelte:fragment slot="controls">
    <Hst.Radio bind:value={mode} options="{[ { label: 'dark', value: 'dark-scheme' }, { label: 'light', value: 'light-scheme' } ]}" title="Mode" />
    <Hst.Radio bind:value={type} options="{[ { label: 'primary', value: 'primary' }, { label: 'secondary', value: 'secondary' }, { label: 'danger', value: 'danger' }, { label: 'link', value: 'link' }, { label: 'tab', value: 'tab' } ]}" title="Type" />
  </svelte:fragment>
</Hst.Story>
`;
export {
  __resolved__virtual_storySource_srcStoriesButtonStorySvelte as default
};
