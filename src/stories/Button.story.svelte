<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  export let Hst: Hst
  import '../dark.css';
  import '../light.css';
  import { Button } from '@podman-desktop/ui-svelte';
  import { faPlay } from '@fortawesome/free-solid-svg-icons';
    import { schemes } from './consts';

  let mode: 'dark-scheme' | 'light-scheme' = 'dark-scheme';
  let type: 'primary' | 'secondary' | 'danger' | 'link' | 'tab' = 'primary';
  let title: string = '';
  let content: string = 'a button';
  let inProgress: boolean = false;
  let disabled: boolean = false;
  let withIcon: boolean = false;
  let selected: boolean = false;
  $: icon = withIcon ? faPlay : undefined;
</script>

<Hst.Story>

  <Hst.Variant title="Text button">
    <h2>Default</h2>
    {#each schemes as scheme}
    <div class="{scheme} p-4 bg-[var(--pd-content-bg)]">
      <Button type="primary">primary (default)</Button>
      <Button type="secondary">secondary</Button>
      <Button type="danger">danger</Button>
      <Button type="link">link</Button>
      <Button type="tab">tab</Button>
    </div>
    {/each}

    <h2>With title</h2>
    {#each schemes as scheme}
    <div class="{scheme} p-4 bg-[var(--pd-content-bg)]">
      <Button title="a title" type="primary">primary (default)</Button>
      <Button title="a title" type="secondary">secondary</Button>
      <Button title="a title" type="danger">danger</Button>
      <Button title="a title" type="link">link</Button>
      <Button title="a title" type="tab">tab</Button>
    </div>
    {/each}

    <h2>Disabled</h2>
    {#each schemes as scheme}
    <div class="{scheme} p-4 bg-[var(--pd-content-bg)]">
      <Button disabled type="primary">primary (default)</Button>
      <Button disabled type="secondary">secondary</Button>
      <Button disabled type="danger">danger</Button>
      <Button disabled type="link">link</Button>
      <Button disabled type="tab">tab</Button>
    </div>
    {/each}

    <h2>Tabs</h2>
    {#each schemes as scheme}
    <div class="{scheme} p-4 bg-[var(--pd-content-bg)]">
      <Button type="tab">Tab 1</Button>
      <Button selected type="tab">Tab 2 (selected)</Button>
      <Button type="tab">Tab 3</Button>
    </div>
    {/each}

  </Hst.Variant>

  <Hst.Variant title="Text+Icon button">
    <h2>Default</h2>
    {#each schemes as scheme}
    <div class="{scheme} p-4 bg-[var(--pd-content-bg)]">
      <Button icon="{faPlay}" type="primary">primary (default)</Button>
      <Button icon="{faPlay}" type="secondary">secondary</Button>
      <Button icon="{faPlay}" type="danger">danger</Button>
      <Button icon="{faPlay}" type="link">link</Button>
      <Button icon="{faPlay}" type="tab">tab</Button>
    </div>
    {/each}

    <h2>With title</h2>
    {#each schemes as scheme}
    <div class="{scheme} p-4 bg-[var(--pd-content-bg)]">
      <Button icon="{faPlay}" title="a title" type="primary">primary (default)</Button>
      <Button icon="{faPlay}" title="a title" type="secondary">secondary</Button>
      <Button icon="{faPlay}" title="a title" type="danger">danger</Button>
      <Button icon="{faPlay}" title="a title" type="link">link</Button>
      <Button icon="{faPlay}" title="a title" type="tab">tab</Button>
    </div>
    {/each}

    <h2>In progress</h2>
    {#each schemes as scheme}
    <div class="{scheme} p-4 bg-[var(--pd-content-bg)]">
      <Button icon="{faPlay}" inProgress type="primary">primary (default)</Button>
      <Button icon="{faPlay}" inProgress type="secondary">secondary</Button>
      <Button icon="{faPlay}" inProgress type="danger">danger</Button>
      <Button icon="{faPlay}" inProgress type="link">link</Button>
      <Button icon="{faPlay}" inProgress type="tab">tab</Button>
    </div>
    {/each}

    <h2>Disabled</h2>
    {#each schemes as scheme}
    <div class="{scheme} p-4 bg-[var(--pd-content-bg)]">
      <Button icon="{faPlay}" disabled type="primary">primary (default)</Button>
      <Button icon="{faPlay}" disabled type="secondary">secondary</Button>
      <Button icon="{faPlay}" disabled type="danger">danger</Button>
      <Button icon="{faPlay}" disabled type="link">link</Button>
      <Button icon="{faPlay}" disabled type="tab">tab</Button>
    </div>
    {/each}

    <h2>Tabs</h2>
    {#each schemes as scheme}
    <div class="{scheme} p-4 bg-[var(--pd-content-bg)]">
      <Button icon="{faPlay}" type="tab">Tab 1</Button>
      <Button icon="{faPlay}" selected type="tab">Tab 2 (selected)</Button>
      <Button icon="{faPlay}" type="tab">Tab 3</Button>
    </div>
    {/each}

  </Hst.Variant>

  <Hst.Variant title="Sandbox">
    <div class="{mode} p-4 bg-[var(--pd-content-bg)]">
      <Button {type} {title} {inProgress} {disabled} {icon} {selected}>{content}</Button>
    </div>
  
    <svelte:fragment slot="controls">
      <Hst.Radio bind:value={mode} options="{[ { label: 'dark', value: 'dark-scheme' }, { label: 'light', value: 'light-scheme' } ]}" title="Mode" />
      <Hst.Radio bind:value={type} options="{[ { label: 'primary', value: 'primary' }, { label: 'secondary', value: 'secondary' }, { label: 'danger', value: 'danger' }, { label: 'link', value: 'link' }, { label: 'tab', value: 'tab' } ]}" title="Type" />
      <Hst.Text bind:value={content} title="Content" />
      <Hst.Text bind:value={title} title="Title" />
      <Hst.Checkbox bind:value={disabled} title="Disabled" />
      <Hst.Checkbox bind:value={withIcon} title="Icon" />
      {#if withIcon}
        <Hst.Checkbox bind:value={inProgress} title="In progress" />
      {/if}
      {#if type === 'tab'}
        <Hst.Checkbox bind:value={selected} title="Selected" />
      {/if}
    </svelte:fragment>  
  </Hst.Variant>
</Hst.Story>
