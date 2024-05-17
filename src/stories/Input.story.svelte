<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Input } from '@podman-desktop/ui-svelte';
  export let Hst: Hst
  import '../dark.css';
  import '../light.css';

  let mode: 'dark-scheme' | 'light-scheme' = 'dark-scheme';
  let placeholder: string = 'default placeholder';
  let disabled: boolean = false;
</script>

<Hst.Story>
  <div class="{mode} p-4 bg-[var(--pd-content-bg)]">
    <Input {placeholder} {disabled}></Input>
  </div>

  <svelte:fragment slot="controls">
    <Hst.Radio bind:value={mode} options="{[ { label: 'dark', value: 'dark-scheme' }, { label: 'light', value: 'light-scheme' } ]}" title="Mode" />
    <Hst.Text bind:value={placeholder} title="Placeholder" />
    <Hst.Checkbox bind:value={disabled} title="Disabled" />
  </svelte:fragment>
</Hst.Story>
