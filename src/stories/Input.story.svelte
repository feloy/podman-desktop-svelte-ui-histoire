<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Input } from '@podman-desktop/ui-svelte';
  export let Hst: Hst
  import '../dark.css';
  import '../light.css';

  let placeholder: string = 'default placeholder';
  let disabled: boolean = false;
</script>

<Hst.Story>
  <Hst.Variant title="Dark mode">
    <div class="dark-scheme p-4 bg-[var(--pd-content-bg)]">
      <Input {placeholder} {disabled}></Input>
    </div>


  </Hst.Variant>

  <Hst.Variant title="Light mode">
    <div class="light-scheme p-4 bg-[var(--pd-content-bg)]">
      <Input {placeholder} {disabled}></Input>
    </div>
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <Hst.Text bind:value={placeholder} title="Placeholder" />
    <Hst.Checkbox bind:value={disabled} title="Disabled" />
</svelte:fragment>
</Hst.Story>
  