<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  export let Hst: Hst
  import '../dark.css';
  import '../light.css';
  import { Button } from '@podman-desktop/ui-svelte';

  let type: 'primary' | 'secondary' | 'danger' | 'link' | 'tab' = 'primary';
</script>

<Hst.Story>
  <Hst.Variant title="Dark mode">
    <div class="dark-scheme p-4 bg-[var(--pd-content-bg)]">
      <Button {type}>content</Button>
    </div>


  </Hst.Variant>

  <Hst.Variant title="Light mode">
    <div class="light-scheme p-4 bg-[var(--pd-content-bg)]">
      <Button {type}>content</Button>
    </div>
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <Hst.Radio bind:value={type} options="{[ { label: 'primary', value: 'primary' }, { label: 'secondary', value: 'secondary' }, { label: 'danger', value: 'danger' }, { label: 'link', value: 'link' }, { label: 'tab', value: 'tab' } ]}" title="Type" />
</svelte:fragment>
</Hst.Story>
  