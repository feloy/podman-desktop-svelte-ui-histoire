const __resolved__virtual_storySource_srcStoriesInputStorySvelte = `<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Input } from '@podman-desktop/ui-svelte';
  import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';

  export let Hst: Hst
  import '../dark.css';
  import '../light.css';
  import { schemes } from './consts';

  let mode: 'dark-scheme' | 'light-scheme' = 'dark-scheme';
  let placeholder: string = 'default placeholder';
  let id: string = '';
  let name: string = '';
  let valueType: 'text' | 'numeric' = 'text';
  let numericValue: number | undefined;
  let textValue: string | undefined;
  let readonly: boolean = false;
  let required: boolean = false;
  let clearable: boolean = false;
  let disabled: boolean = false;
  let error: string = '';
  let showError: boolean = true;
  let leftContent: boolean = false;
  let rightContent: boolean = false;  
$: value = valueType === 'text' ? textValue : numericValue;
<\/script>

<Hst.Story>
  <Hst.Variant title="Input">
    <h2>Default</h2>
    <div class="flex flex-row">
      {#each schemes as scheme}
        <div class="{scheme} p-4 bg-[var(--pd-content-bg)] grow">
          <Input></Input>
        </div>
      {/each}
    </div>

    <h2>Placeholder</h2>
    <div class="flex flex-row">
      {#each schemes as scheme}
        <div class="{scheme} p-4 bg-[var(--pd-content-bg)] grow">
          <Input placeholder="type here..."></Input>
        </div>
      {/each}
    </div>

    <h2>Text value</h2>
    <div class="flex flex-row">
      {#each schemes as scheme}
        <div class="{scheme} p-4 bg-[var(--pd-content-bg)] grow">
          <Input value="abc"></Input>
        </div>
      {/each}
    </div>

    <h2>Numeric value</h2>
    <div class="flex flex-row">
      {#each schemes as scheme}
        <div class="{scheme} p-4 bg-[var(--pd-content-bg)] grow">
          <Input value={123}></Input>
        </div>
      {/each}
    </div>

    <h2>Read-only</h2>
    <div class="flex flex-row">
      {#each schemes as scheme}
        <div class="{scheme} p-4 bg-[var(--pd-content-bg)] grow">
          <Input value="abc" readonly></Input>
        </div>
      {/each}
    </div>

    <h2>Disabled</h2>
    <div class="flex flex-row">
      {#each schemes as scheme}
        <div class="{scheme} p-4 bg-[var(--pd-content-bg)] grow">
          <Input value="abc" disabled></Input>
        </div>
      {/each}
    </div>

    <h2>Required</h2>
    <div class="flex flex-row">
      {#each schemes as scheme}
        <div class="{scheme} p-4 bg-[var(--pd-content-bg)] grow">
          <Input required></Input>
        </div>
      {/each}
    </div>

    <h2>Clearable</h2>
    <div class="flex flex-row">
      {#each schemes as scheme}
        <div class="{scheme} p-4 bg-[var(--pd-content-bg)] grow">
          <Input value="abc" clearable></Input>
        </div>
      {/each}
    </div>

    <h2>Displayed error</h2>
    <div class="flex flex-row">
      {#each schemes as scheme}
        <div class="{scheme} p-4 bg-[var(--pd-content-bg)] grow">
          <Input value="abc" error="min length is 5"></Input>
        </div>
      {/each}
    </div>

    <h2>Undisplayed error</h2>
    <div class="flex flex-row">
      {#each schemes as scheme}
        <div class="{scheme} p-4 bg-[var(--pd-content-bg)] grow">
          <Input value="abc" showError={false} error="min length is 5"></Input>
        </div>
      {/each}
    </div>

    <h2>Left/right content</h2>
    <div class="flex flex-row">
      {#each schemes as scheme}
        <div class="{scheme} p-4 bg-[var(--pd-content-bg)] grow">
          <Input>
            <svelte:fragment slot="left"><span class="text-gray-600">&gt;</span></svelte:fragment>
            <svelte:fragment slot="right"><span class="text-gray-600">&lt;</span></svelte:fragment>
          </Input>
        </div>
      {/each}
    </div>
  </Hst.Variant>
  
  <Hst.Variant title="Sandbox">
    <div class="{mode} p-4 bg-[var(--pd-content-bg)]">
      <Input {placeholder} {id} {name} {disabled} {readonly} {required} {clearable} {value} {error} {showError}>    
        <svelte:fragment slot="left">{#if leftContent}<Fa class="text-gray-400" icon="{faChevronRight}"></Fa>{/if}</svelte:fragment>
        <svelte:fragment slot="right">{#if rightContent}<Fa class="text-gray-400" icon="{faChevronLeft}"></Fa>{/if}</svelte:fragment>
      </Input>
    </div>

    <svelte:fragment slot="controls">
      <Hst.Radio bind:value={mode} options="{[ { label: 'dark', value: 'dark-scheme' }, { label: 'light', value: 'light-scheme' } ]}" title="Mode" />
      <Hst.Text bind:value={placeholder} title="Placeholder" />
      <Hst.Text bind:value={id} title="ID" />
      <Hst.Text bind:value={name} title="Name" />
      <Hst.Radio bind:value={valueType} options="{[ { label: 'text', value: 'text' }, { label: 'numeric', value: 'numeric' } ]}" title="Value type" />
      {#if valueType === 'numeric'}
        <Hst.Number bind:value={numericValue} title="Numeric value"></Hst.Number>
      {/if}
      {#if valueType === 'text'}
        <Hst.Text bind:value={textValue} title="Text value"></Hst.Text>
      {/if}
      <Hst.Checkbox bind:value={readonly} title="Read-only" />
      <Hst.Checkbox bind:value={disabled} title="Disabled" />
      <Hst.Checkbox bind:value={required} title="Required" />
      <Hst.Checkbox bind:value={clearable} title="Clearable" />
      <Hst.Text bind:value={error} title="Error"></Hst.Text>
      <Hst.Checkbox bind:value={showError} title="Show error" />
      <Hst.Checkbox bind:value={leftContent} title="Left content" />
      <Hst.Checkbox bind:value={rightContent} title="Right content" />
    </svelte:fragment>
  </Hst.Variant>
</Hst.Story>
`;
export {
  __resolved__virtual_storySource_srcStoriesInputStorySvelte as default
};
