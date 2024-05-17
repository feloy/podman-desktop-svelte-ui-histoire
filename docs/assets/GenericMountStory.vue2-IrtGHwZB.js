const __vite__fileDeps=["assets/HomeView.vue-CtwcIz4o.js","assets/story-Jz5qQ6Xs.js","assets/vendor-CGnjTfPa.js","assets/StoryView.vue-BiyAzYp9.js","assets/MobileOverlay.vue2-DQqvGAOi.js","assets/BaseEmpty.vue-CWNYcoFQ.js","assets/state-CnLEFtbT.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import { S as SvelteComponentDev, Q as init, R as dispatch_dev, U as safe_not_equal, V as validate_slots, W as Button, X as binding_callbacks, Y as bind, Z as create_component, _ as claim_component, $ as mount_component, a0 as transition_in, a1 as transition_out, a2 as destroy_component, a3 as element, a4 as claim_element, a5 as children, a6 as detach_dev, a7 as attr_dev, a8 as add_location, a9 as insert_hydration_dev, aa as space, ab as claim_space, ac as add_flush_callback, ad as text, ae as claim_text, af as Input, ag as Comp2, ah as Logo_square, ai as Logo_dark, aj as createRouter, ak as createWebHistory, al as createWebHashHistory, am as useDark, an as useToggle, k as watch, ao as markRaw, E as reactive, d as defineComponent, r as ref, ap as watchEffect, o as openBlock, q as createBlock, aq as mergeProps, ar as resolveDynamicComponent, h as createCommentVNode } from "./vendor-CGnjTfPa.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/podman-desktop-svelte-ui-histoire/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = Promise.all(deps.map((dep) => {
      dep = assetsURL(dep);
      if (dep in seen)
        return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
        return;
      }
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) {
        link.as = "script";
        link.crossOrigin = "";
      }
      link.href = dep;
      if (cspNonce) {
        link.setAttribute("nonce", cspNonce);
      }
      document.head.appendChild(link);
      if (isCss) {
        return new Promise((res, rej) => {
          link.addEventListener("load", res);
          link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
        });
      }
    }));
  }
  return promise.then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", { cancelable: true });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
const file$1 = "src/stories/Button.story.svelte";
function create_default_slot_1(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("content");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "content");
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(11:4) <Button {type}>",
    ctx
  });
  return block;
}
function create_default_slot$1(ctx) {
  let div;
  let button;
  let div_class_value;
  let current;
  button = new Button({
    props: {
      type: (
        /*type*/
        ctx[2]
      ),
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(button.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(button.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", div_class_value = /*mode*/
      ctx[1] + " p-4 bg-[var(--pd-content-bg)]");
      add_location(div, file$1, 12, 2, 204);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(button, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button_changes = {};
      if (dirty & /*type*/
      4)
        button_changes.type = /*type*/
        ctx2[2];
      if (dirty & /*$$scope*/
      32) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
      if (!current || dirty & /*mode*/
      2 && div_class_value !== (div_class_value = /*mode*/
      ctx2[1] + " p-4 bg-[var(--pd-content-bg)]")) {
        attr_dev(div, "class", div_class_value);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
      destroy_component(button);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$1.name,
    type: "slot",
    source: "(9:0) <Hst.Story>",
    ctx
  });
  return block;
}
function create_controls_slot$1(ctx) {
  let hst_radio0;
  let updating_value;
  let t;
  let hst_radio1;
  let updating_value_1;
  let current;
  function hst_radio0_value_binding(value) {
    ctx[3](value);
  }
  let hst_radio0_props = {
    options: [
      { label: "dark", value: "dark-scheme" },
      { label: "light", value: "light-scheme" }
    ],
    title: "Mode"
  };
  if (
    /*mode*/
    ctx[1] !== void 0
  ) {
    hst_radio0_props.value = /*mode*/
    ctx[1];
  }
  hst_radio0 = new /*Hst*/
  ctx[0].Radio({ props: hst_radio0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_radio0, "value", hst_radio0_value_binding));
  function hst_radio1_value_binding(value) {
    ctx[4](value);
  }
  let hst_radio1_props = {
    options: [
      { label: "primary", value: "primary" },
      { label: "secondary", value: "secondary" },
      { label: "danger", value: "danger" },
      { label: "link", value: "link" },
      { label: "tab", value: "tab" }
    ],
    title: "Type"
  };
  if (
    /*type*/
    ctx[2] !== void 0
  ) {
    hst_radio1_props.value = /*type*/
    ctx[2];
  }
  hst_radio1 = new /*Hst*/
  ctx[0].Radio({ props: hst_radio1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_radio1, "value", hst_radio1_value_binding));
  const block = {
    c: function create() {
      create_component(hst_radio0.$$.fragment);
      t = space();
      create_component(hst_radio1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_radio0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(hst_radio1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_radio0, target, anchor);
      insert_hydration_dev(target, t, anchor);
      mount_component(hst_radio1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_radio0_changes = {};
      if (!updating_value && dirty & /*mode*/
      2) {
        updating_value = true;
        hst_radio0_changes.value = /*mode*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_radio0.$set(hst_radio0_changes);
      const hst_radio1_changes = {};
      if (!updating_value_1 && dirty & /*type*/
      4) {
        updating_value_1 = true;
        hst_radio1_changes.value = /*type*/
        ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_radio1.$set(hst_radio1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_radio0.$$.fragment, local);
      transition_in(hst_radio1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_radio0.$$.fragment, local);
      transition_out(hst_radio1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
      destroy_component(hst_radio0, detaching);
      destroy_component(hst_radio1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$1.name,
    type: "slot",
    source: '(14:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$1(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      $$slots: {
        controls: [create_controls_slot$1],
        default: [create_default_slot$1]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_story.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope, type, mode*/
      38) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Button_story", slots, []);
  let { Hst } = $$props;
  let mode = "dark-scheme";
  let type = "primary";
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Button_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Button_story> was created with unknown prop '${key}'`);
  });
  function hst_radio0_value_binding(value) {
    mode = value;
    $$invalidate(1, mode);
  }
  function hst_radio1_value_binding(value) {
    type = value;
    $$invalidate(2, type);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Hst, Button, mode, type });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("mode" in $$props2)
      $$invalidate(1, mode = $$props2.mode);
    if ("type" in $$props2)
      $$invalidate(2, type = $$props2.type);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, mode, type, hst_radio0_value_binding, hst_radio1_value_binding];
}
class Button_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Button_story",
      options,
      id: create_fragment$1.name
    });
  }
  get Hst() {
    throw new Error("<Button_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Button_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file = "src/stories/Input.story.svelte";
function create_default_slot(ctx) {
  let div;
  let input;
  let div_class_value;
  let current;
  input = new Input({
    props: {
      placeholder: (
        /*placeholder*/
        ctx[2]
      ),
      disabled: (
        /*disabled*/
        ctx[3]
      )
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(input.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(input.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", div_class_value = /*mode*/
      ctx[1] + " p-4 bg-[var(--pd-content-bg)]");
      add_location(div, file, 13, 2, 244);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(input, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const input_changes = {};
      if (dirty & /*placeholder*/
      4)
        input_changes.placeholder = /*placeholder*/
        ctx2[2];
      if (dirty & /*disabled*/
      8)
        input_changes.disabled = /*disabled*/
        ctx2[3];
      input.$set(input_changes);
      if (!current || dirty & /*mode*/
      2 && div_class_value !== (div_class_value = /*mode*/
      ctx2[1] + " p-4 bg-[var(--pd-content-bg)]")) {
        attr_dev(div, "class", div_class_value);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(input.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(input.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
      destroy_component(input);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: "(10:0) <Hst.Story>",
    ctx
  });
  return block;
}
function create_controls_slot(ctx) {
  let hst_radio;
  let updating_value;
  let t0;
  let hst_text;
  let updating_value_1;
  let t1;
  let hst_checkbox;
  let updating_value_2;
  let current;
  function hst_radio_value_binding(value) {
    ctx[4](value);
  }
  let hst_radio_props = {
    options: [
      { label: "dark", value: "dark-scheme" },
      { label: "light", value: "light-scheme" }
    ],
    title: "Mode"
  };
  if (
    /*mode*/
    ctx[1] !== void 0
  ) {
    hst_radio_props.value = /*mode*/
    ctx[1];
  }
  hst_radio = new /*Hst*/
  ctx[0].Radio({ props: hst_radio_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_radio, "value", hst_radio_value_binding));
  function hst_text_value_binding(value) {
    ctx[5](value);
  }
  let hst_text_props = { title: "Placeholder" };
  if (
    /*placeholder*/
    ctx[2] !== void 0
  ) {
    hst_text_props.value = /*placeholder*/
    ctx[2];
  }
  hst_text = new /*Hst*/
  ctx[0].Text({ props: hst_text_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text, "value", hst_text_value_binding));
  function hst_checkbox_value_binding(value) {
    ctx[6](value);
  }
  let hst_checkbox_props = { title: "Disabled" };
  if (
    /*disabled*/
    ctx[3] !== void 0
  ) {
    hst_checkbox_props.value = /*disabled*/
    ctx[3];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding));
  const block = {
    c: function create() {
      create_component(hst_radio.$$.fragment);
      t0 = space();
      create_component(hst_text.$$.fragment);
      t1 = space();
      create_component(hst_checkbox.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_radio.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(hst_text.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(hst_checkbox.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_radio, target, anchor);
      insert_hydration_dev(target, t0, anchor);
      mount_component(hst_text, target, anchor);
      insert_hydration_dev(target, t1, anchor);
      mount_component(hst_checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_radio_changes = {};
      if (!updating_value && dirty & /*mode*/
      2) {
        updating_value = true;
        hst_radio_changes.value = /*mode*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_radio.$set(hst_radio_changes);
      const hst_text_changes = {};
      if (!updating_value_1 && dirty & /*placeholder*/
      4) {
        updating_value_1 = true;
        hst_text_changes.value = /*placeholder*/
        ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_text.$set(hst_text_changes);
      const hst_checkbox_changes = {};
      if (!updating_value_2 && dirty & /*disabled*/
      8) {
        updating_value_2 = true;
        hst_checkbox_changes.value = /*disabled*/
        ctx2[3];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_radio.$$.fragment, local);
      transition_in(hst_text.$$.fragment, local);
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_radio.$$.fragment, local);
      transition_out(hst_text.$$.fragment, local);
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
      }
      destroy_component(hst_radio, detaching);
      destroy_component(hst_text, detaching);
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot.name,
    type: "slot",
    source: '(15:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      $$slots: {
        controls: [create_controls_slot],
        default: [create_default_slot]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_story.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope, disabled, placeholder, mode*/
      142) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Input_story", slots, []);
  let { Hst } = $$props;
  let mode = "dark-scheme";
  let placeholder = "default placeholder";
  let disabled = false;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Input_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Input_story> was created with unknown prop '${key}'`);
  });
  function hst_radio_value_binding(value) {
    mode = value;
    $$invalidate(1, mode);
  }
  function hst_text_value_binding(value) {
    placeholder = value;
    $$invalidate(2, placeholder);
  }
  function hst_checkbox_value_binding(value) {
    disabled = value;
    $$invalidate(3, disabled);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Input, Hst, mode, placeholder, disabled });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("mode" in $$props2)
      $$invalidate(1, mode = $$props2.mode);
    if ("placeholder" in $$props2)
      $$invalidate(2, placeholder = $$props2.placeholder);
    if ("disabled" in $$props2)
      $$invalidate(3, disabled = $$props2.disabled);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    mode,
    placeholder,
    disabled,
    hst_radio_value_binding,
    hst_text_value_binding,
    hst_checkbox_value_binding
  ];
}
class Input_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Input_story",
      options,
      id: create_fragment.name
    });
  }
  get Hst() {
    throw new Error("<Input_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Input_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
let files = [
  { "id": "src-stories-button-story-svelte", "path": ["Button"], "filePath": "src/stories/Button.story.svelte", "story": { "id": "src-stories-button-story-svelte", "title": "Button", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte4", "index": 0, component: Button_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-button-story-svelte-CGDCoa2g.js"), true ? [] : void 0) },
  { "id": "src-stories-input-story-svelte", "path": ["Input"], "filePath": "src/stories/Input.story.svelte", "story": { "id": "src-stories-input-story-svelte", "title": "Input", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte4", "index": 1, component: Input_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-input-story-svelte-JJhD2HhY.js"), true ? [] : void 0) },
  { "id": "tailwind", "path": ["Tailwind"], "filePath": "/Users/phmartin/Documents/gits/ui-histoire/node_modules/.histoire/plugins/builtin_tailwind-tokens/Tailwind.story.js", "story": { "id": "tailwind", "title": "Tailwind", "group": "design-system", "layout": { "type": "single", "iframe": false }, "icon": "mdi:tailwind", "docsOnly": false, "variants": [{ "id": "background-color", "title": "Background Color", "icon": "carbon:color-palette" }, { "id": "text-color", "title": "Text Color", "icon": "carbon:text-color" }, { "id": "border-color", "title": "Border Color", "icon": "carbon:color-palette" }, { "id": "padding", "title": "Padding", "icon": "carbon:area" }, { "id": "margin", "title": "Margin", "icon": "carbon:area" }, { "id": "font-size", "title": "Font Size", "icon": "carbon:text-font" }, { "id": "font-weight", "title": "Font Weight", "icon": "carbon:text-font" }, { "id": "font-family", "title": "Font Family", "icon": "carbon:text-font" }, { "id": "letter-spacing", "title": "Letter Spacing", "icon": "carbon:text-font" }, { "id": "line-height", "title": "Line Height", "icon": "carbon:text-font" }, { "id": "drop-shadow", "title": "Drop Shadow", "icon": "carbon:shape-except" }, { "id": "border-radius", "title": "Border Radius", "icon": "carbon:condition-wait-point" }, { "id": "border-width", "title": "Border Width", "icon": "carbon:checkbox" }, { "id": "width", "title": "Width", "icon": "carbon:pan-horizontal" }, { "id": "height", "title": "Height", "icon": "carbon:pan-vertical" }, { "id": "full-config", "title": "Full Config", "icon": "carbon:code" }] }, "supportPluginId": "vanilla", "index": 2, component: Comp2, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_tailwind-l3qle87z.js"), true ? [] : void 0) }
];
let tree = [{ "group": true, "id": "design-system", "title": "Design System", "children": [{ "title": "Tailwind", "index": 2 }] }, { "title": "Button", "index": 0 }, { "title": "Input", "index": 1 }];
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "/Users/phmartin/Documents/gits/ui-histoire/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-svelte", "supportPlugin": { "id": "svelte4", "moduleName": "@histoire/plugin-svelte", "setupFn": ["setupSvelte3", "setupSvelte4"] }, "commands": [{ "id": "histoire:plugin-svelte:generate-story", "label": "Generate Svelte 3 story from component", "icon": "https://svelte.dev/favicon.png", "searchText": "generate create", "clientSetupFile": "@histoire/plugin-svelte/dist/commands/generate-story.client.js" }] }], "outDir": "/Users/phmartin/Documents/gits/ui-histoire/.histoire/dist", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "svelte", "patterns": ["**/*.svelte"], "pluginIds": ["svelte4"] }], "tree": { "file": "title", "order": "asc", "groups": [{ "id": "design-system", "title": "Design System" }] }, "theme": { "title": "Histoire", "colors": { "primary": { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "defaultColorScheme": "auto", "storeColorScheme": true, "darkClass": "dark", "logo": { "square": "@histoire/plugin-svelte/assets/histoire-svelte.svg", "light": "@histoire/plugin-svelte/assets/histoire-svelte-text.svg", "dark": "@histoire/plugin-svelte/assets/histoire-svelte-text.svg" } }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent", "contrastColor": "#333" }, { "label": "White", "color": "#fff", "contrastColor": "#333" }, { "label": "Light gray", "color": "#aaa", "contrastColor": "#000" }, { "label": "Dark gray", "color": "#333", "contrastColor": "#fff" }, { "label": "Black", "color": "#000", "contrastColor": "#eee" }], "sandboxDarkClass": "dark", "routerMode": "hash", "build": { "excludeFromVendorsChunk": [] }, "viteIgnorePlugins": ["vite-plugin-sveltekit-compile"], "setupFile": "/histoire-setup.ts" };
const logos = { square: Logo_square, light: Logo_dark, dark: Logo_dark };
const histoireConfig = config;
const customLogos = logos;
const base = "/podman-desktop-svelte-ui-histoire/";
function createRouterHistory() {
  switch (histoireConfig.routerMode) {
    case "hash":
      return createWebHashHistory(base);
    case "history":
    default:
      return createWebHistory(base);
  }
}
const router = createRouter({
  history: createRouterHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => __vitePreload(() => import("./HomeView.vue-CtwcIz4o.js"), true ? __vite__mapDeps([0,1,2]) : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-BiyAzYp9.js"), true ? __vite__mapDeps([3,2,1,4,5,6]) : void 0)
    }
  ]
});
const isDark = useDark({
  valueDark: "htw-dark",
  initialValue: histoireConfig.theme.defaultColorScheme,
  storageKey: "histoire-color-scheme",
  storage: histoireConfig.theme.storeColorScheme ? localStorage : sessionStorage
});
const toggleDark = useToggle(isDark);
function applyDarkToControls() {
  var _a;
  (_a = window.__hst_controls_dark) == null ? void 0 : _a.forEach((ref2) => {
    ref2.value = isDark.value;
  });
}
watch(isDark, () => {
  applyDarkToControls();
}, {
  immediate: true
});
window.__hst_controls_dark_ready = () => {
  applyDarkToControls();
};
function mapFile(file2, existingFile) {
  let result;
  {
    result = {
      ...file2,
      component: markRaw(file2.component),
      story: {
        ...file2.story,
        title: file2.story.title,
        file: markRaw(file2),
        variants: file2.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor-CGnjTfPa.js").then((n) => n.aW), true ? [] : void 0),
  "svelte4": () => __vitePreload(() => import("./vendor-CGnjTfPa.js").then((n) => n.aX), true ? [] : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: {}
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        class: "histoire-generic-mount-story",
        story: _ctx.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  __vitePreload as _,
  tree as a,
  _sfc_main as b,
  customLogos as c,
  clientSupportPlugins as d,
  base as e,
  files as f,
  histoireConfig as h,
  isDark as i,
  mapFile as m,
  router as r,
  toggleDark as t
};
