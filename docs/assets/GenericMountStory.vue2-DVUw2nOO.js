const __vite__fileDeps=["assets/HomeView.vue-pzxhZ83q.js","assets/story-DvbJrgBe.js","assets/vendor-C_KVm_SL.js","assets/StoryView.vue-DJMW5jgZ.js","assets/MobileOverlay.vue2-BICTMg9R.js","assets/BaseEmpty.vue-CiOGRs7m.js","assets/state-BenXHiGF.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import { S as SvelteComponentDev, Q as init, R as dispatch_dev, U as safe_not_equal, V as validate_slots, W as Button, X as faPlay, Y as create_component, Z as claim_component, _ as mount_component, $ as transition_in, a0 as transition_out, a1 as destroy_component, a2 as ensure_array_like_dev, a3 as binding_callbacks, a4 as bind, a5 as space, a6 as claim_space, a7 as insert_hydration_dev, a8 as detach_dev, a9 as element, aa as empty, ab as claim_element, ac as get_svelte_dataset, ad as add_location, ae as noop, af as destroy_each, ag as children, ah as attr_dev, ai as add_flush_callback, aj as group_outros, ak as check_outros, al as append_hydration_dev, am as text, an as claim_text, ao as set_data_dev, ap as Input, aq as faChevronRight, ar as faChevronLeft, as as Fa, at as Comp2, au as Logo_square, av as Logo_dark, aw as createRouter, ax as createWebHistory, ay as createWebHashHistory, az as useDark, aA as useToggle, k as watch, aB as markRaw, E as reactive, d as defineComponent, r as ref, aC as watchEffect, o as openBlock, q as createBlock, aD as mergeProps, aE as resolveDynamicComponent, h as createCommentVNode } from "./vendor-C_KVm_SL.js";
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
const schemes = ["dark-scheme", "light-scheme"];
const file$1 = "src/stories/Button.story.svelte";
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[18] = list[i];
  return child_ctx;
}
function get_each_context_1$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[18] = list[i];
  return child_ctx;
}
function get_each_context_2$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[18] = list[i];
  return child_ctx;
}
function get_each_context_3$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[18] = list[i];
  return child_ctx;
}
function get_each_context_4$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[18] = list[i];
  return child_ctx;
}
function get_each_context_5$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[18] = list[i];
  return child_ctx;
}
function get_each_context_6$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[18] = list[i];
  return child_ctx;
}
function get_each_context_7$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[18] = list[i];
  return child_ctx;
}
function get_each_context_8$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[18] = list[i];
  return child_ctx;
}
function create_default_slot_45(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("primary (default)");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "primary (default)");
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
    id: create_default_slot_45.name,
    type: "slot",
    source: '(25:6) <Button type=\\"primary\\">',
    ctx
  });
  return block;
}
function create_default_slot_44(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("secondary");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "secondary");
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
    id: create_default_slot_44.name,
    type: "slot",
    source: '(26:6) <Button type=\\"secondary\\">',
    ctx
  });
  return block;
}
function create_default_slot_43(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("danger");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "danger");
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
    id: create_default_slot_43.name,
    type: "slot",
    source: '(27:6) <Button type=\\"danger\\">',
    ctx
  });
  return block;
}
function create_default_slot_42(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("link");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "link");
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
    id: create_default_slot_42.name,
    type: "slot",
    source: '(28:6) <Button type=\\"link\\">',
    ctx
  });
  return block;
}
function create_default_slot_41(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("tab");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "tab");
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
    id: create_default_slot_41.name,
    type: "slot",
    source: '(29:6) <Button type=\\"tab\\">',
    ctx
  });
  return block;
}
function create_each_block_8$1(ctx) {
  let div;
  let button0;
  let t0;
  let button1;
  let t1;
  let button2;
  let t2;
  let button3;
  let t3;
  let button4;
  let current;
  button0 = new Button({
    props: {
      type: "primary",
      $$slots: { default: [create_default_slot_45] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button1 = new Button({
    props: {
      type: "secondary",
      $$slots: { default: [create_default_slot_44] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button2 = new Button({
    props: {
      type: "danger",
      $$slots: { default: [create_default_slot_43] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button3 = new Button({
    props: {
      type: "link",
      $$slots: { default: [create_default_slot_42] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button4 = new Button({
    props: {
      type: "tab",
      $$slots: { default: [create_default_slot_41] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(button0.$$.fragment);
      t0 = space();
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(button2.$$.fragment);
      t2 = space();
      create_component(button3.$$.fragment);
      t3 = space();
      create_component(button4.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(button0.$$.fragment, div_nodes);
      t0 = claim_space(div_nodes);
      claim_component(button1.$$.fragment, div_nodes);
      t1 = claim_space(div_nodes);
      claim_component(button2.$$.fragment, div_nodes);
      t2 = claim_space(div_nodes);
      claim_component(button3.$$.fragment, div_nodes);
      t3 = claim_space(div_nodes);
      claim_component(button4.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(
        div,
        "class",
        /*scheme*/
        ctx[18] + " p-4 bg-[var(--pd-content-bg)]"
      );
      add_location(div, file$1, 25, 4, 562);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(button0, div, null);
      append_hydration_dev(div, t0);
      mount_component(button1, div, null);
      append_hydration_dev(div, t1);
      mount_component(button2, div, null);
      append_hydration_dev(div, t2);
      mount_component(button3, div, null);
      append_hydration_dev(div, t3);
      mount_component(button4, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button0_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button0.$set(button0_changes);
      const button1_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button1.$set(button1_changes);
      const button2_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button2.$set(button2_changes);
      const button3_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button3.$set(button3_changes);
      const button4_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button4.$set(button4_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      transition_in(button3.$$.fragment, local);
      transition_in(button4.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      transition_out(button3.$$.fragment, local);
      transition_out(button4.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
      destroy_component(button0);
      destroy_component(button1);
      destroy_component(button2);
      destroy_component(button3);
      destroy_component(button4);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_8$1.name,
    type: "each",
    source: "(23:4) {#each schemes as scheme}",
    ctx
  });
  return block;
}
function create_default_slot_40(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("primary (default)");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "primary (default)");
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
    id: create_default_slot_40.name,
    type: "slot",
    source: '(36:6) <Button title=\\"a title\\" type=\\"primary\\">',
    ctx
  });
  return block;
}
function create_default_slot_39(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("secondary");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "secondary");
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
    id: create_default_slot_39.name,
    type: "slot",
    source: '(37:6) <Button title=\\"a title\\" type=\\"secondary\\">',
    ctx
  });
  return block;
}
function create_default_slot_38(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("danger");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "danger");
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
    id: create_default_slot_38.name,
    type: "slot",
    source: '(38:6) <Button title=\\"a title\\" type=\\"danger\\">',
    ctx
  });
  return block;
}
function create_default_slot_37(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("link");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "link");
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
    id: create_default_slot_37.name,
    type: "slot",
    source: '(39:6) <Button title=\\"a title\\" type=\\"link\\">',
    ctx
  });
  return block;
}
function create_default_slot_36(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("tab");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "tab");
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
    id: create_default_slot_36.name,
    type: "slot",
    source: '(40:6) <Button title=\\"a title\\" type=\\"tab\\">',
    ctx
  });
  return block;
}
function create_each_block_7$1(ctx) {
  let div;
  let button0;
  let t0;
  let button1;
  let t1;
  let button2;
  let t2;
  let button3;
  let t3;
  let button4;
  let current;
  button0 = new Button({
    props: {
      title: "a title",
      type: "primary",
      $$slots: { default: [create_default_slot_40] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button1 = new Button({
    props: {
      title: "a title",
      type: "secondary",
      $$slots: { default: [create_default_slot_39] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button2 = new Button({
    props: {
      title: "a title",
      type: "danger",
      $$slots: { default: [create_default_slot_38] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button3 = new Button({
    props: {
      title: "a title",
      type: "link",
      $$slots: { default: [create_default_slot_37] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button4 = new Button({
    props: {
      title: "a title",
      type: "tab",
      $$slots: { default: [create_default_slot_36] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(button0.$$.fragment);
      t0 = space();
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(button2.$$.fragment);
      t2 = space();
      create_component(button3.$$.fragment);
      t3 = space();
      create_component(button4.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(button0.$$.fragment, div_nodes);
      t0 = claim_space(div_nodes);
      claim_component(button1.$$.fragment, div_nodes);
      t1 = claim_space(div_nodes);
      claim_component(button2.$$.fragment, div_nodes);
      t2 = claim_space(div_nodes);
      claim_component(button3.$$.fragment, div_nodes);
      t3 = claim_space(div_nodes);
      claim_component(button4.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(
        div,
        "class",
        /*scheme*/
        ctx[18] + " p-4 bg-[var(--pd-content-bg)]"
      );
      add_location(div, file$1, 36, 4, 925);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(button0, div, null);
      append_hydration_dev(div, t0);
      mount_component(button1, div, null);
      append_hydration_dev(div, t1);
      mount_component(button2, div, null);
      append_hydration_dev(div, t2);
      mount_component(button3, div, null);
      append_hydration_dev(div, t3);
      mount_component(button4, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button0_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button0.$set(button0_changes);
      const button1_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button1.$set(button1_changes);
      const button2_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button2.$set(button2_changes);
      const button3_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button3.$set(button3_changes);
      const button4_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button4.$set(button4_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      transition_in(button3.$$.fragment, local);
      transition_in(button4.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      transition_out(button3.$$.fragment, local);
      transition_out(button4.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
      destroy_component(button0);
      destroy_component(button1);
      destroy_component(button2);
      destroy_component(button3);
      destroy_component(button4);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_7$1.name,
    type: "each",
    source: "(34:4) {#each schemes as scheme}",
    ctx
  });
  return block;
}
function create_default_slot_35(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("primary (default)");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "primary (default)");
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
    id: create_default_slot_35.name,
    type: "slot",
    source: '(47:6) <Button disabled type=\\"primary\\">',
    ctx
  });
  return block;
}
function create_default_slot_34(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("secondary");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "secondary");
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
    id: create_default_slot_34.name,
    type: "slot",
    source: '(48:6) <Button disabled type=\\"secondary\\">',
    ctx
  });
  return block;
}
function create_default_slot_33(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("danger");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "danger");
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
    id: create_default_slot_33.name,
    type: "slot",
    source: '(49:6) <Button disabled type=\\"danger\\">',
    ctx
  });
  return block;
}
function create_default_slot_32(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("link");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "link");
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
    id: create_default_slot_32.name,
    type: "slot",
    source: '(50:6) <Button disabled type=\\"link\\">',
    ctx
  });
  return block;
}
function create_default_slot_31(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("tab");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "tab");
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
    id: create_default_slot_31.name,
    type: "slot",
    source: '(51:6) <Button disabled type=\\"tab\\">',
    ctx
  });
  return block;
}
function create_each_block_6$1(ctx) {
  let div;
  let button0;
  let t0;
  let button1;
  let t1;
  let button2;
  let t2;
  let button3;
  let t3;
  let button4;
  let current;
  button0 = new Button({
    props: {
      disabled: true,
      type: "primary",
      $$slots: { default: [create_default_slot_35] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button1 = new Button({
    props: {
      disabled: true,
      type: "secondary",
      $$slots: { default: [create_default_slot_34] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button2 = new Button({
    props: {
      disabled: true,
      type: "danger",
      $$slots: { default: [create_default_slot_33] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button3 = new Button({
    props: {
      disabled: true,
      type: "link",
      $$slots: { default: [create_default_slot_32] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button4 = new Button({
    props: {
      disabled: true,
      type: "tab",
      $$slots: { default: [create_default_slot_31] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(button0.$$.fragment);
      t0 = space();
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(button2.$$.fragment);
      t2 = space();
      create_component(button3.$$.fragment);
      t3 = space();
      create_component(button4.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(button0.$$.fragment, div_nodes);
      t0 = claim_space(div_nodes);
      claim_component(button1.$$.fragment, div_nodes);
      t1 = claim_space(div_nodes);
      claim_component(button2.$$.fragment, div_nodes);
      t2 = claim_space(div_nodes);
      claim_component(button3.$$.fragment, div_nodes);
      t3 = claim_space(div_nodes);
      claim_component(button4.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(
        div,
        "class",
        /*scheme*/
        ctx[18] + " p-4 bg-[var(--pd-content-bg)]"
      );
      add_location(div, file$1, 47, 4, 1366);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(button0, div, null);
      append_hydration_dev(div, t0);
      mount_component(button1, div, null);
      append_hydration_dev(div, t1);
      mount_component(button2, div, null);
      append_hydration_dev(div, t2);
      mount_component(button3, div, null);
      append_hydration_dev(div, t3);
      mount_component(button4, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button0_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button0.$set(button0_changes);
      const button1_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button1.$set(button1_changes);
      const button2_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button2.$set(button2_changes);
      const button3_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button3.$set(button3_changes);
      const button4_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button4.$set(button4_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      transition_in(button3.$$.fragment, local);
      transition_in(button4.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      transition_out(button3.$$.fragment, local);
      transition_out(button4.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
      destroy_component(button0);
      destroy_component(button1);
      destroy_component(button2);
      destroy_component(button3);
      destroy_component(button4);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_6$1.name,
    type: "each",
    source: "(45:4) {#each schemes as scheme}",
    ctx
  });
  return block;
}
function create_default_slot_30(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Tab 1");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Tab 1");
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
    id: create_default_slot_30.name,
    type: "slot",
    source: '(58:6) <Button type=\\"tab\\">',
    ctx
  });
  return block;
}
function create_default_slot_29(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Tab 2 (selected)");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Tab 2 (selected)");
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
    id: create_default_slot_29.name,
    type: "slot",
    source: '(59:6) <Button selected type=\\"tab\\">',
    ctx
  });
  return block;
}
function create_default_slot_28(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Tab 3");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Tab 3");
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
    id: create_default_slot_28.name,
    type: "slot",
    source: '(60:6) <Button type=\\"tab\\">',
    ctx
  });
  return block;
}
function create_each_block_5$1(ctx) {
  let div;
  let button0;
  let t0;
  let button1;
  let t1;
  let button2;
  let t2;
  let current;
  button0 = new Button({
    props: {
      type: "tab",
      $$slots: { default: [create_default_slot_30] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button1 = new Button({
    props: {
      selected: true,
      type: "tab",
      $$slots: { default: [create_default_slot_29] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button2 = new Button({
    props: {
      type: "tab",
      $$slots: { default: [create_default_slot_28] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(button0.$$.fragment);
      t0 = space();
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(button2.$$.fragment);
      t2 = space();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(button0.$$.fragment, div_nodes);
      t0 = claim_space(div_nodes);
      claim_component(button1.$$.fragment, div_nodes);
      t1 = claim_space(div_nodes);
      claim_component(button2.$$.fragment, div_nodes);
      t2 = claim_space(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(
        div,
        "class",
        /*scheme*/
        ctx[18] + " p-4 bg-[var(--pd-content-bg)]"
      );
      add_location(div, file$1, 58, 4, 1768);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(button0, div, null);
      append_hydration_dev(div, t0);
      mount_component(button1, div, null);
      append_hydration_dev(div, t1);
      mount_component(button2, div, null);
      append_hydration_dev(div, t2);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button0_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button0.$set(button0_changes);
      const button1_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button1.$set(button1_changes);
      const button2_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button2.$set(button2_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
      destroy_component(button0);
      destroy_component(button1);
      destroy_component(button2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_5$1.name,
    type: "each",
    source: "(56:4) {#each schemes as scheme}",
    ctx
  });
  return block;
}
function create_default_slot_27(ctx) {
  let h20;
  let textContent = "Default";
  let t1;
  let t2;
  let h21;
  let textContent_1 = "With title";
  let t4;
  let t5;
  let h22;
  let textContent_2 = "Disabled";
  let t7;
  let t8;
  let h23;
  let textContent_3 = "Tabs";
  let t10;
  let each3_anchor;
  let current;
  let each_value_8 = ensure_array_like_dev(schemes);
  let each_blocks_3 = [];
  for (let i = 0; i < each_value_8.length; i += 1) {
    each_blocks_3[i] = create_each_block_8$1(get_each_context_8$1(ctx, each_value_8, i));
  }
  let each_value_7 = ensure_array_like_dev(schemes);
  let each_blocks_2 = [];
  for (let i = 0; i < each_value_7.length; i += 1) {
    each_blocks_2[i] = create_each_block_7$1(get_each_context_7$1(ctx, each_value_7, i));
  }
  let each_value_6 = ensure_array_like_dev(schemes);
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_6.length; i += 1) {
    each_blocks_1[i] = create_each_block_6$1(get_each_context_6$1(ctx, each_value_6, i));
  }
  let each_value_5 = ensure_array_like_dev(schemes);
  let each_blocks = [];
  for (let i = 0; i < each_value_5.length; i += 1) {
    each_blocks[i] = create_each_block_5$1(get_each_context_5$1(ctx, each_value_5, i));
  }
  const block = {
    c: function create() {
      h20 = element("h2");
      h20.textContent = textContent;
      t1 = space();
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].c();
      }
      t2 = space();
      h21 = element("h2");
      h21.textContent = textContent_1;
      t4 = space();
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].c();
      }
      t5 = space();
      h22 = element("h2");
      h22.textContent = textContent_2;
      t7 = space();
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t8 = space();
      h23 = element("h2");
      h23.textContent = textContent_3;
      t10 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each3_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      h20 = claim_element(nodes, "H2", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(h20) !== "svelte-zcecrh")
        h20.textContent = textContent;
      t1 = claim_space(nodes);
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].l(nodes);
      }
      t2 = claim_space(nodes);
      h21 = claim_element(nodes, "H2", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(h21) !== "svelte-1vm4c6k")
        h21.textContent = textContent_1;
      t4 = claim_space(nodes);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].l(nodes);
      }
      t5 = claim_space(nodes);
      h22 = claim_element(nodes, "H2", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(h22) !== "svelte-1nbfzaa")
        h22.textContent = textContent_2;
      t7 = claim_space(nodes);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].l(nodes);
      }
      t8 = claim_space(nodes);
      h23 = claim_element(nodes, "H2", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(h23) !== "svelte-1s6nc72")
        h23.textContent = textContent_3;
      t10 = claim_space(nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each3_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      add_location(h20, file$1, 23, 4, 511);
      add_location(h21, file$1, 34, 4, 871);
      add_location(h22, file$1, 45, 4, 1314);
      add_location(h23, file$1, 56, 4, 1720);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, h20, anchor);
      insert_hydration_dev(target, t1, anchor);
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        if (each_blocks_3[i]) {
          each_blocks_3[i].m(target, anchor);
        }
      }
      insert_hydration_dev(target, t2, anchor);
      insert_hydration_dev(target, h21, anchor);
      insert_hydration_dev(target, t4, anchor);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        if (each_blocks_2[i]) {
          each_blocks_2[i].m(target, anchor);
        }
      }
      insert_hydration_dev(target, t5, anchor);
      insert_hydration_dev(target, h22, anchor);
      insert_hydration_dev(target, t7, anchor);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        if (each_blocks_1[i]) {
          each_blocks_1[i].m(target, anchor);
        }
      }
      insert_hydration_dev(target, t8, anchor);
      insert_hydration_dev(target, h23, anchor);
      insert_hydration_dev(target, t10, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_hydration_dev(target, each3_anchor, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      for (let i = 0; i < each_value_8.length; i += 1) {
        transition_in(each_blocks_3[i]);
      }
      for (let i = 0; i < each_value_7.length; i += 1) {
        transition_in(each_blocks_2[i]);
      }
      for (let i = 0; i < each_value_6.length; i += 1) {
        transition_in(each_blocks_1[i]);
      }
      for (let i = 0; i < each_value_5.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o: function outro(local) {
      each_blocks_3 = each_blocks_3.filter(Boolean);
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        transition_out(each_blocks_3[i]);
      }
      each_blocks_2 = each_blocks_2.filter(Boolean);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        transition_out(each_blocks_2[i]);
      }
      each_blocks_1 = each_blocks_1.filter(Boolean);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        transition_out(each_blocks_1[i]);
      }
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(h20);
        detach_dev(t1);
        detach_dev(t2);
        detach_dev(h21);
        detach_dev(t4);
        detach_dev(t5);
        detach_dev(h22);
        detach_dev(t7);
        detach_dev(t8);
        detach_dev(h23);
        detach_dev(t10);
        detach_dev(each3_anchor);
      }
      destroy_each(each_blocks_3, detaching);
      destroy_each(each_blocks_2, detaching);
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_27.name,
    type: "slot",
    source: '(21:2) <Hst.Variant title=\\"Text button\\">',
    ctx
  });
  return block;
}
function create_default_slot_26(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("primary (default)");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "primary (default)");
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
    id: create_default_slot_26.name,
    type: "slot",
    source: '(70:6) <Button icon=\\"{faPlay}\\" type=\\"primary\\">',
    ctx
  });
  return block;
}
function create_default_slot_25(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("secondary");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "secondary");
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
    id: create_default_slot_25.name,
    type: "slot",
    source: '(71:6) <Button icon=\\"{faPlay}\\" type=\\"secondary\\">',
    ctx
  });
  return block;
}
function create_default_slot_24(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("danger");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "danger");
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
    id: create_default_slot_24.name,
    type: "slot",
    source: '(72:6) <Button icon=\\"{faPlay}\\" type=\\"danger\\">',
    ctx
  });
  return block;
}
function create_default_slot_23(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("link");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "link");
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
    id: create_default_slot_23.name,
    type: "slot",
    source: '(73:6) <Button icon=\\"{faPlay}\\" type=\\"link\\">',
    ctx
  });
  return block;
}
function create_default_slot_22(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("tab");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "tab");
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
    id: create_default_slot_22.name,
    type: "slot",
    source: '(74:6) <Button icon=\\"{faPlay}\\" type=\\"tab\\">',
    ctx
  });
  return block;
}
function create_each_block_4$1(ctx) {
  let div;
  let button0;
  let t0;
  let button1;
  let t1;
  let button2;
  let t2;
  let button3;
  let t3;
  let button4;
  let current;
  button0 = new Button({
    props: {
      icon: faPlay,
      type: "primary",
      $$slots: { default: [create_default_slot_26] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button1 = new Button({
    props: {
      icon: faPlay,
      type: "secondary",
      $$slots: { default: [create_default_slot_25] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button2 = new Button({
    props: {
      icon: faPlay,
      type: "danger",
      $$slots: { default: [create_default_slot_24] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button3 = new Button({
    props: {
      icon: faPlay,
      type: "link",
      $$slots: { default: [create_default_slot_23] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button4 = new Button({
    props: {
      icon: faPlay,
      type: "tab",
      $$slots: { default: [create_default_slot_22] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(button0.$$.fragment);
      t0 = space();
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(button2.$$.fragment);
      t2 = space();
      create_component(button3.$$.fragment);
      t3 = space();
      create_component(button4.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(button0.$$.fragment, div_nodes);
      t0 = claim_space(div_nodes);
      claim_component(button1.$$.fragment, div_nodes);
      t1 = claim_space(div_nodes);
      claim_component(button2.$$.fragment, div_nodes);
      t2 = claim_space(div_nodes);
      claim_component(button3.$$.fragment, div_nodes);
      t3 = claim_space(div_nodes);
      claim_component(button4.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(
        div,
        "class",
        /*scheme*/
        ctx[18] + " p-4 bg-[var(--pd-content-bg)]"
      );
      add_location(div, file$1, 70, 4, 2099);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(button0, div, null);
      append_hydration_dev(div, t0);
      mount_component(button1, div, null);
      append_hydration_dev(div, t1);
      mount_component(button2, div, null);
      append_hydration_dev(div, t2);
      mount_component(button3, div, null);
      append_hydration_dev(div, t3);
      mount_component(button4, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button0_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button0.$set(button0_changes);
      const button1_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button1.$set(button1_changes);
      const button2_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button2.$set(button2_changes);
      const button3_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button3.$set(button3_changes);
      const button4_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button4.$set(button4_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      transition_in(button3.$$.fragment, local);
      transition_in(button4.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      transition_out(button3.$$.fragment, local);
      transition_out(button4.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
      destroy_component(button0);
      destroy_component(button1);
      destroy_component(button2);
      destroy_component(button3);
      destroy_component(button4);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_4$1.name,
    type: "each",
    source: "(68:4) {#each schemes as scheme}",
    ctx
  });
  return block;
}
function create_default_slot_21(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("primary (default)");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "primary (default)");
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
    id: create_default_slot_21.name,
    type: "slot",
    source: '(81:6) <Button icon=\\"{faPlay}\\" title=\\"a title\\" type=\\"primary\\">',
    ctx
  });
  return block;
}
function create_default_slot_20(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("secondary");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "secondary");
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
    id: create_default_slot_20.name,
    type: "slot",
    source: '(82:6) <Button icon=\\"{faPlay}\\" title=\\"a title\\" type=\\"secondary\\">',
    ctx
  });
  return block;
}
function create_default_slot_19(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("danger");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "danger");
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
    id: create_default_slot_19.name,
    type: "slot",
    source: '(83:6) <Button icon=\\"{faPlay}\\" title=\\"a title\\" type=\\"danger\\">',
    ctx
  });
  return block;
}
function create_default_slot_18(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("link");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "link");
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
    id: create_default_slot_18.name,
    type: "slot",
    source: '(84:6) <Button icon=\\"{faPlay}\\" title=\\"a title\\" type=\\"link\\">',
    ctx
  });
  return block;
}
function create_default_slot_17(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("tab");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "tab");
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
    id: create_default_slot_17.name,
    type: "slot",
    source: '(85:6) <Button icon=\\"{faPlay}\\" title=\\"a title\\" type=\\"tab\\">',
    ctx
  });
  return block;
}
function create_each_block_3$1(ctx) {
  let div;
  let button0;
  let t0;
  let button1;
  let t1;
  let button2;
  let t2;
  let button3;
  let t3;
  let button4;
  let current;
  button0 = new Button({
    props: {
      icon: faPlay,
      title: "a title",
      type: "primary",
      $$slots: { default: [create_default_slot_21] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button1 = new Button({
    props: {
      icon: faPlay,
      title: "a title",
      type: "secondary",
      $$slots: { default: [create_default_slot_20] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button2 = new Button({
    props: {
      icon: faPlay,
      title: "a title",
      type: "danger",
      $$slots: { default: [create_default_slot_19] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button3 = new Button({
    props: {
      icon: faPlay,
      title: "a title",
      type: "link",
      $$slots: { default: [create_default_slot_18] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button4 = new Button({
    props: {
      icon: faPlay,
      title: "a title",
      type: "tab",
      $$slots: { default: [create_default_slot_17] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(button0.$$.fragment);
      t0 = space();
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(button2.$$.fragment);
      t2 = space();
      create_component(button3.$$.fragment);
      t3 = space();
      create_component(button4.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(button0.$$.fragment, div_nodes);
      t0 = claim_space(div_nodes);
      claim_component(button1.$$.fragment, div_nodes);
      t1 = claim_space(div_nodes);
      claim_component(button2.$$.fragment, div_nodes);
      t2 = claim_space(div_nodes);
      claim_component(button3.$$.fragment, div_nodes);
      t3 = claim_space(div_nodes);
      claim_component(button4.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(
        div,
        "class",
        /*scheme*/
        ctx[18] + " p-4 bg-[var(--pd-content-bg)]"
      );
      add_location(div, file$1, 81, 4, 2542);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(button0, div, null);
      append_hydration_dev(div, t0);
      mount_component(button1, div, null);
      append_hydration_dev(div, t1);
      mount_component(button2, div, null);
      append_hydration_dev(div, t2);
      mount_component(button3, div, null);
      append_hydration_dev(div, t3);
      mount_component(button4, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button0_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button0.$set(button0_changes);
      const button1_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button1.$set(button1_changes);
      const button2_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button2.$set(button2_changes);
      const button3_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button3.$set(button3_changes);
      const button4_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button4.$set(button4_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      transition_in(button3.$$.fragment, local);
      transition_in(button4.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      transition_out(button3.$$.fragment, local);
      transition_out(button4.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
      destroy_component(button0);
      destroy_component(button1);
      destroy_component(button2);
      destroy_component(button3);
      destroy_component(button4);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_3$1.name,
    type: "each",
    source: "(79:4) {#each schemes as scheme}",
    ctx
  });
  return block;
}
function create_default_slot_16(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("primary (default)");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "primary (default)");
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
    id: create_default_slot_16.name,
    type: "slot",
    source: '(92:6) <Button icon=\\"{faPlay}\\" inProgress type=\\"primary\\">',
    ctx
  });
  return block;
}
function create_default_slot_15(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("secondary");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "secondary");
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
    id: create_default_slot_15.name,
    type: "slot",
    source: '(93:6) <Button icon=\\"{faPlay}\\" inProgress type=\\"secondary\\">',
    ctx
  });
  return block;
}
function create_default_slot_14(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("danger");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "danger");
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
    id: create_default_slot_14.name,
    type: "slot",
    source: '(94:6) <Button icon=\\"{faPlay}\\" inProgress type=\\"danger\\">',
    ctx
  });
  return block;
}
function create_default_slot_13(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("link");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "link");
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
    id: create_default_slot_13.name,
    type: "slot",
    source: '(95:6) <Button icon=\\"{faPlay}\\" inProgress type=\\"link\\">',
    ctx
  });
  return block;
}
function create_default_slot_12(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("tab");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "tab");
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
    id: create_default_slot_12.name,
    type: "slot",
    source: '(96:6) <Button icon=\\"{faPlay}\\" inProgress type=\\"tab\\">',
    ctx
  });
  return block;
}
function create_each_block_2$1(ctx) {
  let div;
  let button0;
  let t0;
  let button1;
  let t1;
  let button2;
  let t2;
  let button3;
  let t3;
  let button4;
  let current;
  button0 = new Button({
    props: {
      icon: faPlay,
      inProgress: true,
      type: "primary",
      $$slots: { default: [create_default_slot_16] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button1 = new Button({
    props: {
      icon: faPlay,
      inProgress: true,
      type: "secondary",
      $$slots: { default: [create_default_slot_15] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button2 = new Button({
    props: {
      icon: faPlay,
      inProgress: true,
      type: "danger",
      $$slots: { default: [create_default_slot_14] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button3 = new Button({
    props: {
      icon: faPlay,
      inProgress: true,
      type: "link",
      $$slots: { default: [create_default_slot_13] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button4 = new Button({
    props: {
      icon: faPlay,
      inProgress: true,
      type: "tab",
      $$slots: { default: [create_default_slot_12] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(button0.$$.fragment);
      t0 = space();
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(button2.$$.fragment);
      t2 = space();
      create_component(button3.$$.fragment);
      t3 = space();
      create_component(button4.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(button0.$$.fragment, div_nodes);
      t0 = claim_space(div_nodes);
      claim_component(button1.$$.fragment, div_nodes);
      t1 = claim_space(div_nodes);
      claim_component(button2.$$.fragment, div_nodes);
      t2 = claim_space(div_nodes);
      claim_component(button3.$$.fragment, div_nodes);
      t3 = claim_space(div_nodes);
      claim_component(button4.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(
        div,
        "class",
        /*scheme*/
        ctx[18] + " p-4 bg-[var(--pd-content-bg)]"
      );
      add_location(div, file$1, 92, 4, 3066);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(button0, div, null);
      append_hydration_dev(div, t0);
      mount_component(button1, div, null);
      append_hydration_dev(div, t1);
      mount_component(button2, div, null);
      append_hydration_dev(div, t2);
      mount_component(button3, div, null);
      append_hydration_dev(div, t3);
      mount_component(button4, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button0_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button0.$set(button0_changes);
      const button1_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button1.$set(button1_changes);
      const button2_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button2.$set(button2_changes);
      const button3_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button3.$set(button3_changes);
      const button4_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button4.$set(button4_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      transition_in(button3.$$.fragment, local);
      transition_in(button4.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      transition_out(button3.$$.fragment, local);
      transition_out(button4.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
      destroy_component(button0);
      destroy_component(button1);
      destroy_component(button2);
      destroy_component(button3);
      destroy_component(button4);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_2$1.name,
    type: "each",
    source: "(90:4) {#each schemes as scheme}",
    ctx
  });
  return block;
}
function create_default_slot_11(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("primary (default)");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "primary (default)");
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
    id: create_default_slot_11.name,
    type: "slot",
    source: '(103:6) <Button icon=\\"{faPlay}\\" disabled type=\\"primary\\">',
    ctx
  });
  return block;
}
function create_default_slot_10(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("secondary");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "secondary");
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
    id: create_default_slot_10.name,
    type: "slot",
    source: '(104:6) <Button icon=\\"{faPlay}\\" disabled type=\\"secondary\\">',
    ctx
  });
  return block;
}
function create_default_slot_9(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("danger");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "danger");
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
    id: create_default_slot_9.name,
    type: "slot",
    source: '(105:6) <Button icon=\\"{faPlay}\\" disabled type=\\"danger\\">',
    ctx
  });
  return block;
}
function create_default_slot_8(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("link");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "link");
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
    id: create_default_slot_8.name,
    type: "slot",
    source: '(106:6) <Button icon=\\"{faPlay}\\" disabled type=\\"link\\">',
    ctx
  });
  return block;
}
function create_default_slot_7(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("tab");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "tab");
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
    id: create_default_slot_7.name,
    type: "slot",
    source: '(107:6) <Button icon=\\"{faPlay}\\" disabled type=\\"tab\\">',
    ctx
  });
  return block;
}
function create_each_block_1$1(ctx) {
  let div;
  let button0;
  let t0;
  let button1;
  let t1;
  let button2;
  let t2;
  let button3;
  let t3;
  let button4;
  let current;
  button0 = new Button({
    props: {
      icon: faPlay,
      disabled: true,
      type: "primary",
      $$slots: { default: [create_default_slot_11] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button1 = new Button({
    props: {
      icon: faPlay,
      disabled: true,
      type: "secondary",
      $$slots: { default: [create_default_slot_10] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button2 = new Button({
    props: {
      icon: faPlay,
      disabled: true,
      type: "danger",
      $$slots: { default: [create_default_slot_9] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button3 = new Button({
    props: {
      icon: faPlay,
      disabled: true,
      type: "link",
      $$slots: { default: [create_default_slot_8] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button4 = new Button({
    props: {
      icon: faPlay,
      disabled: true,
      type: "tab",
      $$slots: { default: [create_default_slot_7] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(button0.$$.fragment);
      t0 = space();
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(button2.$$.fragment);
      t2 = space();
      create_component(button3.$$.fragment);
      t3 = space();
      create_component(button4.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(button0.$$.fragment, div_nodes);
      t0 = claim_space(div_nodes);
      claim_component(button1.$$.fragment, div_nodes);
      t1 = claim_space(div_nodes);
      claim_component(button2.$$.fragment, div_nodes);
      t2 = claim_space(div_nodes);
      claim_component(button3.$$.fragment, div_nodes);
      t3 = claim_space(div_nodes);
      claim_component(button4.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(
        div,
        "class",
        /*scheme*/
        ctx[18] + " p-4 bg-[var(--pd-content-bg)]"
      );
      add_location(div, file$1, 103, 4, 3562);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(button0, div, null);
      append_hydration_dev(div, t0);
      mount_component(button1, div, null);
      append_hydration_dev(div, t1);
      mount_component(button2, div, null);
      append_hydration_dev(div, t2);
      mount_component(button3, div, null);
      append_hydration_dev(div, t3);
      mount_component(button4, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button0_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button0.$set(button0_changes);
      const button1_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button1.$set(button1_changes);
      const button2_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button2.$set(button2_changes);
      const button3_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button3.$set(button3_changes);
      const button4_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button4.$set(button4_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      transition_in(button3.$$.fragment, local);
      transition_in(button4.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      transition_out(button3.$$.fragment, local);
      transition_out(button4.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
      destroy_component(button0);
      destroy_component(button1);
      destroy_component(button2);
      destroy_component(button3);
      destroy_component(button4);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_1$1.name,
    type: "each",
    source: "(101:4) {#each schemes as scheme}",
    ctx
  });
  return block;
}
function create_default_slot_6(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Tab 1");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Tab 1");
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
    id: create_default_slot_6.name,
    type: "slot",
    source: '(114:6) <Button icon=\\"{faPlay}\\" type=\\"tab\\">',
    ctx
  });
  return block;
}
function create_default_slot_5(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Tab 2 (selected)");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Tab 2 (selected)");
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
    id: create_default_slot_5.name,
    type: "slot",
    source: '(115:6) <Button icon=\\"{faPlay}\\" selected type=\\"tab\\">',
    ctx
  });
  return block;
}
function create_default_slot_4(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Tab 3");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Tab 3");
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
    id: create_default_slot_4.name,
    type: "slot",
    source: '(116:6) <Button icon=\\"{faPlay}\\" type=\\"tab\\">',
    ctx
  });
  return block;
}
function create_each_block$1(ctx) {
  let div;
  let button0;
  let t0;
  let button1;
  let t1;
  let button2;
  let t2;
  let current;
  button0 = new Button({
    props: {
      icon: faPlay,
      type: "tab",
      $$slots: { default: [create_default_slot_6] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button1 = new Button({
    props: {
      icon: faPlay,
      selected: true,
      type: "tab",
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button2 = new Button({
    props: {
      icon: faPlay,
      type: "tab",
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(button0.$$.fragment);
      t0 = space();
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(button2.$$.fragment);
      t2 = space();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(button0.$$.fragment, div_nodes);
      t0 = claim_space(div_nodes);
      claim_component(button1.$$.fragment, div_nodes);
      t1 = claim_space(div_nodes);
      claim_component(button2.$$.fragment, div_nodes);
      t2 = claim_space(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(
        div,
        "class",
        /*scheme*/
        ctx[18] + " p-4 bg-[var(--pd-content-bg)]"
      );
      add_location(div, file$1, 114, 4, 4044);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(button0, div, null);
      append_hydration_dev(div, t0);
      mount_component(button1, div, null);
      append_hydration_dev(div, t1);
      mount_component(button2, div, null);
      append_hydration_dev(div, t2);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button0_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button0.$set(button0_changes);
      const button1_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button1.$set(button1_changes);
      const button2_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        button2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button2.$set(button2_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
      destroy_component(button0);
      destroy_component(button1);
      destroy_component(button2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$1.name,
    type: "each",
    source: "(112:4) {#each schemes as scheme}",
    ctx
  });
  return block;
}
function create_default_slot_3(ctx) {
  let h20;
  let textContent = "Default";
  let t1;
  let t2;
  let h21;
  let textContent_1 = "With title";
  let t4;
  let t5;
  let h22;
  let textContent_2 = "In progress";
  let t7;
  let t8;
  let h23;
  let textContent_3 = "Disabled";
  let t10;
  let t11;
  let h24;
  let textContent_4 = "Tabs";
  let t13;
  let each4_anchor;
  let current;
  let each_value_4 = ensure_array_like_dev(schemes);
  let each_blocks_4 = [];
  for (let i = 0; i < each_value_4.length; i += 1) {
    each_blocks_4[i] = create_each_block_4$1(get_each_context_4$1(ctx, each_value_4, i));
  }
  let each_value_3 = ensure_array_like_dev(schemes);
  let each_blocks_3 = [];
  for (let i = 0; i < each_value_3.length; i += 1) {
    each_blocks_3[i] = create_each_block_3$1(get_each_context_3$1(ctx, each_value_3, i));
  }
  let each_value_2 = ensure_array_like_dev(schemes);
  let each_blocks_2 = [];
  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks_2[i] = create_each_block_2$1(get_each_context_2$1(ctx, each_value_2, i));
  }
  let each_value_1 = ensure_array_like_dev(schemes);
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i));
  }
  let each_value = ensure_array_like_dev(schemes);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  const block = {
    c: function create() {
      h20 = element("h2");
      h20.textContent = textContent;
      t1 = space();
      for (let i = 0; i < each_blocks_4.length; i += 1) {
        each_blocks_4[i].c();
      }
      t2 = space();
      h21 = element("h2");
      h21.textContent = textContent_1;
      t4 = space();
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].c();
      }
      t5 = space();
      h22 = element("h2");
      h22.textContent = textContent_2;
      t7 = space();
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].c();
      }
      t8 = space();
      h23 = element("h2");
      h23.textContent = textContent_3;
      t10 = space();
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t11 = space();
      h24 = element("h2");
      h24.textContent = textContent_4;
      t13 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each4_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      h20 = claim_element(nodes, "H2", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(h20) !== "svelte-zcecrh")
        h20.textContent = textContent;
      t1 = claim_space(nodes);
      for (let i = 0; i < each_blocks_4.length; i += 1) {
        each_blocks_4[i].l(nodes);
      }
      t2 = claim_space(nodes);
      h21 = claim_element(nodes, "H2", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(h21) !== "svelte-1vm4c6k")
        h21.textContent = textContent_1;
      t4 = claim_space(nodes);
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].l(nodes);
      }
      t5 = claim_space(nodes);
      h22 = claim_element(nodes, "H2", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(h22) !== "svelte-177lygc")
        h22.textContent = textContent_2;
      t7 = claim_space(nodes);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].l(nodes);
      }
      t8 = claim_space(nodes);
      h23 = claim_element(nodes, "H2", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(h23) !== "svelte-1nbfzaa")
        h23.textContent = textContent_3;
      t10 = claim_space(nodes);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].l(nodes);
      }
      t11 = claim_space(nodes);
      h24 = claim_element(nodes, "H2", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(h24) !== "svelte-1s6nc72")
        h24.textContent = textContent_4;
      t13 = claim_space(nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each4_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      add_location(h20, file$1, 68, 4, 2048);
      add_location(h21, file$1, 79, 4, 2488);
      add_location(h22, file$1, 90, 4, 3011);
      add_location(h23, file$1, 101, 4, 3510);
      add_location(h24, file$1, 112, 4, 3996);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, h20, anchor);
      insert_hydration_dev(target, t1, anchor);
      for (let i = 0; i < each_blocks_4.length; i += 1) {
        if (each_blocks_4[i]) {
          each_blocks_4[i].m(target, anchor);
        }
      }
      insert_hydration_dev(target, t2, anchor);
      insert_hydration_dev(target, h21, anchor);
      insert_hydration_dev(target, t4, anchor);
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        if (each_blocks_3[i]) {
          each_blocks_3[i].m(target, anchor);
        }
      }
      insert_hydration_dev(target, t5, anchor);
      insert_hydration_dev(target, h22, anchor);
      insert_hydration_dev(target, t7, anchor);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        if (each_blocks_2[i]) {
          each_blocks_2[i].m(target, anchor);
        }
      }
      insert_hydration_dev(target, t8, anchor);
      insert_hydration_dev(target, h23, anchor);
      insert_hydration_dev(target, t10, anchor);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        if (each_blocks_1[i]) {
          each_blocks_1[i].m(target, anchor);
        }
      }
      insert_hydration_dev(target, t11, anchor);
      insert_hydration_dev(target, h24, anchor);
      insert_hydration_dev(target, t13, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_hydration_dev(target, each4_anchor, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      for (let i = 0; i < each_value_4.length; i += 1) {
        transition_in(each_blocks_4[i]);
      }
      for (let i = 0; i < each_value_3.length; i += 1) {
        transition_in(each_blocks_3[i]);
      }
      for (let i = 0; i < each_value_2.length; i += 1) {
        transition_in(each_blocks_2[i]);
      }
      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks_1[i]);
      }
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o: function outro(local) {
      each_blocks_4 = each_blocks_4.filter(Boolean);
      for (let i = 0; i < each_blocks_4.length; i += 1) {
        transition_out(each_blocks_4[i]);
      }
      each_blocks_3 = each_blocks_3.filter(Boolean);
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        transition_out(each_blocks_3[i]);
      }
      each_blocks_2 = each_blocks_2.filter(Boolean);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        transition_out(each_blocks_2[i]);
      }
      each_blocks_1 = each_blocks_1.filter(Boolean);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        transition_out(each_blocks_1[i]);
      }
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(h20);
        detach_dev(t1);
        detach_dev(t2);
        detach_dev(h21);
        detach_dev(t4);
        detach_dev(t5);
        detach_dev(h22);
        detach_dev(t7);
        detach_dev(t8);
        detach_dev(h23);
        detach_dev(t10);
        detach_dev(t11);
        detach_dev(h24);
        detach_dev(t13);
        detach_dev(each4_anchor);
      }
      destroy_each(each_blocks_4, detaching);
      destroy_each(each_blocks_3, detaching);
      destroy_each(each_blocks_2, detaching);
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_3.name,
    type: "slot",
    source: '(66:2) <Hst.Variant title=\\"Text+Icon button\\">',
    ctx
  });
  return block;
}
function create_default_slot_2$1(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text(
        /*content*/
        ctx[5]
      );
    },
    l: function claim(nodes) {
      t = claim_text(
        nodes,
        /*content*/
        ctx[5]
      );
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty[0] & /*content*/
      32)
        set_data_dev(
          t,
          /*content*/
          ctx2[5]
        );
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_2$1.name,
    type: "slot",
    source: "(124:6) <Button {type} {title} {inProgress} {disabled} {icon} {selected}>",
    ctx
  });
  return block;
}
function create_default_slot_1$1(ctx) {
  let div;
  let button;
  let div_class_value;
  let current;
  button = new Button({
    props: {
      type: (
        /*type*/
        ctx[3]
      ),
      title: (
        /*title*/
        ctx[4]
      ),
      inProgress: (
        /*inProgress*/
        ctx[6]
      ),
      disabled: (
        /*disabled*/
        ctx[7]
      ),
      icon: (
        /*icon*/
        ctx[9]
      ),
      selected: (
        /*selected*/
        ctx[8]
      ),
      $$slots: { default: [create_default_slot_2$1] },
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
      ctx[2] + " p-4 bg-[var(--pd-content-bg)]");
      add_location(div, file$1, 124, 4, 4363);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(button, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button_changes = {};
      if (dirty[0] & /*type*/
      8)
        button_changes.type = /*type*/
        ctx2[3];
      if (dirty[0] & /*title*/
      16)
        button_changes.title = /*title*/
        ctx2[4];
      if (dirty[0] & /*inProgress*/
      64)
        button_changes.inProgress = /*inProgress*/
        ctx2[6];
      if (dirty[0] & /*disabled*/
      128)
        button_changes.disabled = /*disabled*/
        ctx2[7];
      if (dirty[0] & /*icon*/
      512)
        button_changes.icon = /*icon*/
        ctx2[9];
      if (dirty[0] & /*selected*/
      256)
        button_changes.selected = /*selected*/
        ctx2[8];
      if (dirty[0] & /*content*/
      32 | dirty[1] & /*$$scope*/
      64) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
      if (!current || dirty[0] & /*mode*/
      4 && div_class_value !== (div_class_value = /*mode*/
      ctx2[2] + " p-4 bg-[var(--pd-content-bg)]")) {
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
    id: create_default_slot_1$1.name,
    type: "slot",
    source: '(122:2) <Hst.Variant title=\\"Sandbox\\">',
    ctx
  });
  return block;
}
function create_if_block_1$1(ctx) {
  let hst_checkbox;
  let updating_value;
  let current;
  function hst_checkbox_value_binding(value) {
    ctx[16](value);
  }
  let hst_checkbox_props = { title: "In progress" };
  if (
    /*inProgress*/
    ctx[6] !== void 0
  ) {
    hst_checkbox_props.value = /*inProgress*/
    ctx[6];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding));
  const block = {
    c: function create() {
      create_component(hst_checkbox.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_checkbox.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_checkbox_changes = {};
      if (!updating_value && dirty[0] & /*inProgress*/
      64) {
        updating_value = true;
        hst_checkbox_changes.value = /*inProgress*/
        ctx2[6];
        add_flush_callback(() => updating_value = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$1.name,
    type: "if",
    source: "(134:6) {#if withIcon}",
    ctx
  });
  return block;
}
function create_if_block$1(ctx) {
  let hst_checkbox;
  let updating_value;
  let current;
  function hst_checkbox_value_binding_1(value) {
    ctx[17](value);
  }
  let hst_checkbox_props = { title: "Selected" };
  if (
    /*selected*/
    ctx[8] !== void 0
  ) {
    hst_checkbox_props.value = /*selected*/
    ctx[8];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding_1));
  const block = {
    c: function create() {
      create_component(hst_checkbox.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_checkbox.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_checkbox_changes = {};
      if (!updating_value && dirty[0] & /*selected*/
      256) {
        updating_value = true;
        hst_checkbox_changes.value = /*selected*/
        ctx2[8];
        add_flush_callback(() => updating_value = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$1.name,
    type: "if",
    source: "(137:6) {#if type === 'tab'}",
    ctx
  });
  return block;
}
function create_controls_slot$1(ctx) {
  let hst_radio0;
  let updating_value;
  let t0;
  let hst_radio1;
  let updating_value_1;
  let t1;
  let hst_text0;
  let updating_value_2;
  let t2;
  let hst_text1;
  let updating_value_3;
  let t3;
  let hst_checkbox0;
  let updating_value_4;
  let t4;
  let hst_checkbox1;
  let updating_value_5;
  let t5;
  let t6;
  let if_block1_anchor;
  let current;
  function hst_radio0_value_binding(value) {
    ctx[10](value);
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
    ctx[2] !== void 0
  ) {
    hst_radio0_props.value = /*mode*/
    ctx[2];
  }
  hst_radio0 = new /*Hst*/
  ctx[0].Radio({ props: hst_radio0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_radio0, "value", hst_radio0_value_binding));
  function hst_radio1_value_binding(value) {
    ctx[11](value);
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
    ctx[3] !== void 0
  ) {
    hst_radio1_props.value = /*type*/
    ctx[3];
  }
  hst_radio1 = new /*Hst*/
  ctx[0].Radio({ props: hst_radio1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_radio1, "value", hst_radio1_value_binding));
  function hst_text0_value_binding(value) {
    ctx[12](value);
  }
  let hst_text0_props = { title: "Content" };
  if (
    /*content*/
    ctx[5] !== void 0
  ) {
    hst_text0_props.value = /*content*/
    ctx[5];
  }
  hst_text0 = new /*Hst*/
  ctx[0].Text({ props: hst_text0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text0, "value", hst_text0_value_binding));
  function hst_text1_value_binding(value) {
    ctx[13](value);
  }
  let hst_text1_props = { title: "Title" };
  if (
    /*title*/
    ctx[4] !== void 0
  ) {
    hst_text1_props.value = /*title*/
    ctx[4];
  }
  hst_text1 = new /*Hst*/
  ctx[0].Text({ props: hst_text1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text1, "value", hst_text1_value_binding));
  function hst_checkbox0_value_binding(value) {
    ctx[14](value);
  }
  let hst_checkbox0_props = { title: "Disabled" };
  if (
    /*disabled*/
    ctx[7] !== void 0
  ) {
    hst_checkbox0_props.value = /*disabled*/
    ctx[7];
  }
  hst_checkbox0 = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox0_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox0, "value", hst_checkbox0_value_binding));
  function hst_checkbox1_value_binding(value) {
    ctx[15](value);
  }
  let hst_checkbox1_props = { title: "Icon" };
  if (
    /*withIcon*/
    ctx[1] !== void 0
  ) {
    hst_checkbox1_props.value = /*withIcon*/
    ctx[1];
  }
  hst_checkbox1 = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox1_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox1, "value", hst_checkbox1_value_binding));
  let if_block0 = (
    /*withIcon*/
    ctx[1] && create_if_block_1$1(ctx)
  );
  let if_block1 = (
    /*type*/
    ctx[3] === "tab" && create_if_block$1(ctx)
  );
  const block = {
    c: function create() {
      create_component(hst_radio0.$$.fragment);
      t0 = space();
      create_component(hst_radio1.$$.fragment);
      t1 = space();
      create_component(hst_text0.$$.fragment);
      t2 = space();
      create_component(hst_text1.$$.fragment);
      t3 = space();
      create_component(hst_checkbox0.$$.fragment);
      t4 = space();
      create_component(hst_checkbox1.$$.fragment);
      t5 = space();
      if (if_block0)
        if_block0.c();
      t6 = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
    },
    l: function claim(nodes) {
      claim_component(hst_radio0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(hst_radio1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(hst_text0.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(hst_text1.$$.fragment, nodes);
      t3 = claim_space(nodes);
      claim_component(hst_checkbox0.$$.fragment, nodes);
      t4 = claim_space(nodes);
      claim_component(hst_checkbox1.$$.fragment, nodes);
      t5 = claim_space(nodes);
      if (if_block0)
        if_block0.l(nodes);
      t6 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(hst_radio0, target, anchor);
      insert_hydration_dev(target, t0, anchor);
      mount_component(hst_radio1, target, anchor);
      insert_hydration_dev(target, t1, anchor);
      mount_component(hst_text0, target, anchor);
      insert_hydration_dev(target, t2, anchor);
      mount_component(hst_text1, target, anchor);
      insert_hydration_dev(target, t3, anchor);
      mount_component(hst_checkbox0, target, anchor);
      insert_hydration_dev(target, t4, anchor);
      mount_component(hst_checkbox1, target, anchor);
      insert_hydration_dev(target, t5, anchor);
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration_dev(target, t6, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration_dev(target, if_block1_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_radio0_changes = {};
      if (!updating_value && dirty[0] & /*mode*/
      4) {
        updating_value = true;
        hst_radio0_changes.value = /*mode*/
        ctx2[2];
        add_flush_callback(() => updating_value = false);
      }
      hst_radio0.$set(hst_radio0_changes);
      const hst_radio1_changes = {};
      if (!updating_value_1 && dirty[0] & /*type*/
      8) {
        updating_value_1 = true;
        hst_radio1_changes.value = /*type*/
        ctx2[3];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_radio1.$set(hst_radio1_changes);
      const hst_text0_changes = {};
      if (!updating_value_2 && dirty[0] & /*content*/
      32) {
        updating_value_2 = true;
        hst_text0_changes.value = /*content*/
        ctx2[5];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_text0.$set(hst_text0_changes);
      const hst_text1_changes = {};
      if (!updating_value_3 && dirty[0] & /*title*/
      16) {
        updating_value_3 = true;
        hst_text1_changes.value = /*title*/
        ctx2[4];
        add_flush_callback(() => updating_value_3 = false);
      }
      hst_text1.$set(hst_text1_changes);
      const hst_checkbox0_changes = {};
      if (!updating_value_4 && dirty[0] & /*disabled*/
      128) {
        updating_value_4 = true;
        hst_checkbox0_changes.value = /*disabled*/
        ctx2[7];
        add_flush_callback(() => updating_value_4 = false);
      }
      hst_checkbox0.$set(hst_checkbox0_changes);
      const hst_checkbox1_changes = {};
      if (!updating_value_5 && dirty[0] & /*withIcon*/
      2) {
        updating_value_5 = true;
        hst_checkbox1_changes.value = /*withIcon*/
        ctx2[1];
        add_flush_callback(() => updating_value_5 = false);
      }
      hst_checkbox1.$set(hst_checkbox1_changes);
      if (
        /*withIcon*/
        ctx2[1]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty[0] & /*withIcon*/
          2) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1$1(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t6.parentNode, t6);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (
        /*type*/
        ctx2[3] === "tab"
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty[0] & /*type*/
          8) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$1(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_radio0.$$.fragment, local);
      transition_in(hst_radio1.$$.fragment, local);
      transition_in(hst_text0.$$.fragment, local);
      transition_in(hst_text1.$$.fragment, local);
      transition_in(hst_checkbox0.$$.fragment, local);
      transition_in(hst_checkbox1.$$.fragment, local);
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_radio0.$$.fragment, local);
      transition_out(hst_radio1.$$.fragment, local);
      transition_out(hst_text0.$$.fragment, local);
      transition_out(hst_text1.$$.fragment, local);
      transition_out(hst_checkbox0.$$.fragment, local);
      transition_out(hst_checkbox1.$$.fragment, local);
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
        detach_dev(t2);
        detach_dev(t3);
        detach_dev(t4);
        detach_dev(t5);
        detach_dev(t6);
        detach_dev(if_block1_anchor);
      }
      destroy_component(hst_radio0, detaching);
      destroy_component(hst_radio1, detaching);
      destroy_component(hst_text0, detaching);
      destroy_component(hst_text1, detaching);
      destroy_component(hst_checkbox0, detaching);
      destroy_component(hst_checkbox1, detaching);
      if (if_block0)
        if_block0.d(detaching);
      if (if_block1)
        if_block1.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$1.name,
    type: "slot",
    source: '(127:4) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot$1(ctx) {
  let hst_variant0;
  let t0;
  let hst_variant1;
  let t1;
  let hst_variant2;
  let current;
  hst_variant0 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Text button",
      $$slots: { default: [create_default_slot_27] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant1 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Text+Icon button",
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant2 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Sandbox",
      $$slots: {
        controls: [create_controls_slot$1],
        default: [create_default_slot_1$1]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant0.$$.fragment);
      t0 = space();
      create_component(hst_variant1.$$.fragment);
      t1 = space();
      create_component(hst_variant2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_variant0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(hst_variant1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(hst_variant2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant0, target, anchor);
      insert_hydration_dev(target, t0, anchor);
      mount_component(hst_variant1, target, anchor);
      insert_hydration_dev(target, t1, anchor);
      mount_component(hst_variant2, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant0_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        hst_variant0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant0.$set(hst_variant0_changes);
      const hst_variant1_changes = {};
      if (dirty[1] & /*$$scope*/
      64) {
        hst_variant1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant1.$set(hst_variant1_changes);
      const hst_variant2_changes = {};
      if (dirty[0] & /*selected, type, inProgress, withIcon, disabled, title, content, mode, icon*/
      1022 | dirty[1] & /*$$scope*/
      64) {
        hst_variant2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant2.$set(hst_variant2_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant0.$$.fragment, local);
      transition_in(hst_variant1.$$.fragment, local);
      transition_in(hst_variant2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant0.$$.fragment, local);
      transition_out(hst_variant1.$$.fragment, local);
      transition_out(hst_variant2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
      }
      destroy_component(hst_variant0, detaching);
      destroy_component(hst_variant1, detaching);
      destroy_component(hst_variant2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$1.name,
    type: "slot",
    source: "(19:0) <Hst.Story>",
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
      $$slots: { default: [create_default_slot$1] },
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
    p: function update(ctx2, dirty) {
      const hst_story_changes = {};
      if (dirty[0] & /*selected, type, inProgress, withIcon, disabled, title, content, mode, icon*/
      1022 | dirty[1] & /*$$scope*/
      64) {
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
  let icon;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Button_story", slots, []);
  let { Hst } = $$props;
  let mode = "dark-scheme";
  let type = "primary";
  let title = "";
  let content = "a button";
  let inProgress = false;
  let disabled = false;
  let withIcon = false;
  let selected = false;
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
    $$invalidate(2, mode);
  }
  function hst_radio1_value_binding(value) {
    type = value;
    $$invalidate(3, type);
  }
  function hst_text0_value_binding(value) {
    content = value;
    $$invalidate(5, content);
  }
  function hst_text1_value_binding(value) {
    title = value;
    $$invalidate(4, title);
  }
  function hst_checkbox0_value_binding(value) {
    disabled = value;
    $$invalidate(7, disabled);
  }
  function hst_checkbox1_value_binding(value) {
    withIcon = value;
    $$invalidate(1, withIcon);
  }
  function hst_checkbox_value_binding(value) {
    inProgress = value;
    $$invalidate(6, inProgress);
  }
  function hst_checkbox_value_binding_1(value) {
    selected = value;
    $$invalidate(8, selected);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({
    Hst,
    Button,
    faPlay,
    schemes,
    mode,
    type,
    title,
    content,
    inProgress,
    disabled,
    withIcon,
    selected,
    icon
  });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("mode" in $$props2)
      $$invalidate(2, mode = $$props2.mode);
    if ("type" in $$props2)
      $$invalidate(3, type = $$props2.type);
    if ("title" in $$props2)
      $$invalidate(4, title = $$props2.title);
    if ("content" in $$props2)
      $$invalidate(5, content = $$props2.content);
    if ("inProgress" in $$props2)
      $$invalidate(6, inProgress = $$props2.inProgress);
    if ("disabled" in $$props2)
      $$invalidate(7, disabled = $$props2.disabled);
    if ("withIcon" in $$props2)
      $$invalidate(1, withIcon = $$props2.withIcon);
    if ("selected" in $$props2)
      $$invalidate(8, selected = $$props2.selected);
    if ("icon" in $$props2)
      $$invalidate(9, icon = $$props2.icon);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & /*withIcon*/
    2) {
      $$invalidate(9, icon = withIcon ? faPlay : void 0);
    }
  };
  return [
    Hst,
    withIcon,
    mode,
    type,
    title,
    content,
    inProgress,
    disabled,
    selected,
    icon,
    hst_radio0_value_binding,
    hst_radio1_value_binding,
    hst_text0_value_binding,
    hst_text1_value_binding,
    hst_checkbox0_value_binding,
    hst_checkbox1_value_binding,
    hst_checkbox_value_binding,
    hst_checkbox_value_binding_1
  ];
}
class Button_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { Hst: 0 }, null, [-1, -1]);
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
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[32] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[32] = list[i];
  return child_ctx;
}
function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[32] = list[i];
  return child_ctx;
}
function get_each_context_3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[32] = list[i];
  return child_ctx;
}
function get_each_context_4(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[32] = list[i];
  return child_ctx;
}
function get_each_context_5(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[32] = list[i];
  return child_ctx;
}
function get_each_context_6(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[32] = list[i];
  return child_ctx;
}
function get_each_context_7(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[32] = list[i];
  return child_ctx;
}
function get_each_context_8(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[32] = list[i];
  return child_ctx;
}
function get_each_context_9(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[32] = list[i];
  return child_ctx;
}
function get_each_context_10(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[32] = list[i];
  return child_ctx;
}
function create_each_block_10(ctx) {
  let div;
  let input;
  let t;
  let current;
  input = new Input({ $$inline: true });
  const block = {
    c: function create() {
      div = element("div");
      create_component(input.$$.fragment);
      t = space();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(input.$$.fragment, div_nodes);
      t = claim_space(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(
        div,
        "class",
        /*scheme*/
        ctx[32] + " p-4 bg-[var(--pd-content-bg)] grow"
      );
      add_location(div, file, 34, 8, 815);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(input, div, null);
      append_hydration_dev(div, t);
      current = true;
    },
    p: noop,
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
    id: create_each_block_10.name,
    type: "each",
    source: "(31:6) {#each schemes as scheme}",
    ctx
  });
  return block;
}
function create_each_block_9(ctx) {
  let div;
  let input;
  let t;
  let current;
  input = new Input({
    props: { placeholder: "type here..." },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(input.$$.fragment);
      t = space();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(input.$$.fragment, div_nodes);
      t = claim_space(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(
        div,
        "class",
        /*scheme*/
        ctx[32] + " p-4 bg-[var(--pd-content-bg)] grow"
      );
      add_location(div, file, 43, 8, 1037);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(input, div, null);
      append_hydration_dev(div, t);
      current = true;
    },
    p: noop,
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
    id: create_each_block_9.name,
    type: "each",
    source: "(40:6) {#each schemes as scheme}",
    ctx
  });
  return block;
}
function create_each_block_8(ctx) {
  let div;
  let input;
  let t;
  let current;
  input = new Input({ props: { value: "abc" }, $$inline: true });
  const block = {
    c: function create() {
      div = element("div");
      create_component(input.$$.fragment);
      t = space();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(input.$$.fragment, div_nodes);
      t = claim_space(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(
        div,
        "class",
        /*scheme*/
        ctx[32] + " p-4 bg-[var(--pd-content-bg)] grow"
      );
      add_location(div, file, 52, 8, 1285);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(input, div, null);
      append_hydration_dev(div, t);
      current = true;
    },
    p: noop,
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
    id: create_each_block_8.name,
    type: "each",
    source: "(49:6) {#each schemes as scheme}",
    ctx
  });
  return block;
}
function create_each_block_7(ctx) {
  let div;
  let input;
  let t;
  let current;
  input = new Input({ props: { value: 123 }, $$inline: true });
  const block = {
    c: function create() {
      div = element("div");
      create_component(input.$$.fragment);
      t = space();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(input.$$.fragment, div_nodes);
      t = claim_space(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(
        div,
        "class",
        /*scheme*/
        ctx[32] + " p-4 bg-[var(--pd-content-bg)] grow"
      );
      add_location(div, file, 61, 8, 1521);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(input, div, null);
      append_hydration_dev(div, t);
      current = true;
    },
    p: noop,
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
    id: create_each_block_7.name,
    type: "each",
    source: "(58:6) {#each schemes as scheme}",
    ctx
  });
  return block;
}
function create_each_block_6(ctx) {
  let div;
  let input;
  let t;
  let current;
  input = new Input({
    props: { value: "abc", readonly: true },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(input.$$.fragment);
      t = space();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(input.$$.fragment, div_nodes);
      t = claim_space(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(
        div,
        "class",
        /*scheme*/
        ctx[32] + " p-4 bg-[var(--pd-content-bg)] grow"
      );
      add_location(div, file, 70, 8, 1753);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(input, div, null);
      append_hydration_dev(div, t);
      current = true;
    },
    p: noop,
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
    id: create_each_block_6.name,
    type: "each",
    source: "(67:6) {#each schemes as scheme}",
    ctx
  });
  return block;
}
function create_each_block_5(ctx) {
  let div;
  let input;
  let t;
  let current;
  input = new Input({
    props: { value: "abc", disabled: true },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(input.$$.fragment);
      t = space();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(input.$$.fragment, div_nodes);
      t = claim_space(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(
        div,
        "class",
        /*scheme*/
        ctx[32] + " p-4 bg-[var(--pd-content-bg)] grow"
      );
      add_location(div, file, 79, 8, 1993);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(input, div, null);
      append_hydration_dev(div, t);
      current = true;
    },
    p: noop,
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
    id: create_each_block_5.name,
    type: "each",
    source: "(76:6) {#each schemes as scheme}",
    ctx
  });
  return block;
}
function create_each_block_4(ctx) {
  let div;
  let input;
  let t;
  let current;
  input = new Input({
    props: { required: true },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(input.$$.fragment);
      t = space();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(input.$$.fragment, div_nodes);
      t = claim_space(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(
        div,
        "class",
        /*scheme*/
        ctx[32] + " p-4 bg-[var(--pd-content-bg)] grow"
      );
      add_location(div, file, 88, 8, 2233);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(input, div, null);
      append_hydration_dev(div, t);
      current = true;
    },
    p: noop,
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
    id: create_each_block_4.name,
    type: "each",
    source: "(85:6) {#each schemes as scheme}",
    ctx
  });
  return block;
}
function create_each_block_3(ctx) {
  let div;
  let input;
  let t;
  let current;
  input = new Input({
    props: { value: "abc", clearable: true },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(input.$$.fragment);
      t = space();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(input.$$.fragment, div_nodes);
      t = claim_space(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(
        div,
        "class",
        /*scheme*/
        ctx[32] + " p-4 bg-[var(--pd-content-bg)] grow"
      );
      add_location(div, file, 97, 8, 2462);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(input, div, null);
      append_hydration_dev(div, t);
      current = true;
    },
    p: noop,
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
    id: create_each_block_3.name,
    type: "each",
    source: "(94:6) {#each schemes as scheme}",
    ctx
  });
  return block;
}
function create_each_block_2(ctx) {
  let div;
  let input;
  let t;
  let current;
  input = new Input({
    props: { value: "abc", error: "min length is 5" },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(input.$$.fragment);
      t = space();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(input.$$.fragment, div_nodes);
      t = claim_space(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(
        div,
        "class",
        /*scheme*/
        ctx[32] + " p-4 bg-[var(--pd-content-bg)] grow"
      );
      add_location(div, file, 106, 8, 2710);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(input, div, null);
      append_hydration_dev(div, t);
      current = true;
    },
    p: noop,
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
    id: create_each_block_2.name,
    type: "each",
    source: "(103:6) {#each schemes as scheme}",
    ctx
  });
  return block;
}
function create_each_block_1(ctx) {
  let div;
  let input;
  let t;
  let current;
  input = new Input({
    props: {
      value: "abc",
      showError: false,
      error: "min length is 5"
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(input.$$.fragment);
      t = space();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(input.$$.fragment, div_nodes);
      t = claim_space(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(
        div,
        "class",
        /*scheme*/
        ctx[32] + " p-4 bg-[var(--pd-content-bg)] grow"
      );
      add_location(div, file, 115, 8, 2974);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(input, div, null);
      append_hydration_dev(div, t);
      current = true;
    },
    p: noop,
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
    id: create_each_block_1.name,
    type: "each",
    source: "(112:6) {#each schemes as scheme}",
    ctx
  });
  return block;
}
function create_left_slot_1(ctx) {
  let span;
  let textContent = ">";
  const block = {
    c: function create() {
      span = element("span");
      span.textContent = textContent;
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(span) !== "svelte-1n7rl2x")
        span.textContent = textContent;
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "text-gray-600");
      add_location(span, file, 126, 41, 3374);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, span, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(span);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_left_slot_1.name,
    type: "slot",
    source: '(124:12) <svelte:fragment slot=\\"left\\">',
    ctx
  });
  return block;
}
function create_right_slot_1(ctx) {
  let span;
  let textContent = "<";
  const block = {
    c: function create() {
      span = element("span");
      span.textContent = textContent;
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(span) !== "svelte-1gst0yo")
        span.textContent = textContent;
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "text-gray-600");
      add_location(span, file, 127, 42, 3474);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, span, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(span);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_right_slot_1.name,
    type: "slot",
    source: '(125:12) <svelte:fragment slot=\\"right\\">',
    ctx
  });
  return block;
}
function create_each_block(ctx) {
  let div;
  let input;
  let t;
  let current;
  input = new Input({
    props: {
      $$slots: {
        right: [create_right_slot_1],
        left: [create_left_slot_1]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(input.$$.fragment);
      t = space();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(input.$$.fragment, div_nodes);
      t = claim_space(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(
        div,
        "class",
        /*scheme*/
        ctx[32] + " p-4 bg-[var(--pd-content-bg)] grow"
      );
      add_location(div, file, 124, 8, 3257);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(input, div, null);
      append_hydration_dev(div, t);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const input_changes = {};
      if (dirty[1] & /*$$scope*/
      16777216) {
        input_changes.$$scope = { dirty, ctx: ctx2 };
      }
      input.$set(input_changes);
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
    id: create_each_block.name,
    type: "each",
    source: "(121:6) {#each schemes as scheme}",
    ctx
  });
  return block;
}
function create_default_slot_2(ctx) {
  let h20;
  let textContent = "Default";
  let t1;
  let div0;
  let t2;
  let h21;
  let textContent_1 = "Placeholder";
  let t4;
  let div1;
  let t5;
  let h22;
  let textContent_2 = "Text value";
  let t7;
  let div2;
  let t8;
  let h23;
  let textContent_3 = "Numeric value";
  let t10;
  let div3;
  let t11;
  let h24;
  let textContent_4 = "Read-only";
  let t13;
  let div4;
  let t14;
  let h25;
  let textContent_5 = "Disabled";
  let t16;
  let div5;
  let t17;
  let h26;
  let textContent_6 = "Required";
  let t19;
  let div6;
  let t20;
  let h27;
  let textContent_7 = "Clearable";
  let t22;
  let div7;
  let t23;
  let h28;
  let textContent_8 = "Displayed error";
  let t25;
  let div8;
  let t26;
  let h29;
  let textContent_9 = "Undisplayed error";
  let t28;
  let div9;
  let t29;
  let h210;
  let textContent_10 = "Left/right content";
  let t31;
  let div10;
  let current;
  let each_value_10 = ensure_array_like_dev(schemes);
  let each_blocks_10 = [];
  for (let i = 0; i < each_value_10.length; i += 1) {
    each_blocks_10[i] = create_each_block_10(get_each_context_10(ctx, each_value_10, i));
  }
  let each_value_9 = ensure_array_like_dev(schemes);
  let each_blocks_9 = [];
  for (let i = 0; i < each_value_9.length; i += 1) {
    each_blocks_9[i] = create_each_block_9(get_each_context_9(ctx, each_value_9, i));
  }
  let each_value_8 = ensure_array_like_dev(schemes);
  let each_blocks_8 = [];
  for (let i = 0; i < each_value_8.length; i += 1) {
    each_blocks_8[i] = create_each_block_8(get_each_context_8(ctx, each_value_8, i));
  }
  let each_value_7 = ensure_array_like_dev(schemes);
  let each_blocks_7 = [];
  for (let i = 0; i < each_value_7.length; i += 1) {
    each_blocks_7[i] = create_each_block_7(get_each_context_7(ctx, each_value_7, i));
  }
  let each_value_6 = ensure_array_like_dev(schemes);
  let each_blocks_6 = [];
  for (let i = 0; i < each_value_6.length; i += 1) {
    each_blocks_6[i] = create_each_block_6(get_each_context_6(ctx, each_value_6, i));
  }
  let each_value_5 = ensure_array_like_dev(schemes);
  let each_blocks_5 = [];
  for (let i = 0; i < each_value_5.length; i += 1) {
    each_blocks_5[i] = create_each_block_5(get_each_context_5(ctx, each_value_5, i));
  }
  let each_value_4 = ensure_array_like_dev(schemes);
  let each_blocks_4 = [];
  for (let i = 0; i < each_value_4.length; i += 1) {
    each_blocks_4[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
  }
  let each_value_3 = ensure_array_like_dev(schemes);
  let each_blocks_3 = [];
  for (let i = 0; i < each_value_3.length; i += 1) {
    each_blocks_3[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
  }
  let each_value_2 = ensure_array_like_dev(schemes);
  let each_blocks_2 = [];
  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks_2[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }
  let each_value_1 = ensure_array_like_dev(schemes);
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  let each_value = ensure_array_like_dev(schemes);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const block = {
    c: function create() {
      h20 = element("h2");
      h20.textContent = textContent;
      t1 = space();
      div0 = element("div");
      for (let i = 0; i < each_blocks_10.length; i += 1) {
        each_blocks_10[i].c();
      }
      t2 = space();
      h21 = element("h2");
      h21.textContent = textContent_1;
      t4 = space();
      div1 = element("div");
      for (let i = 0; i < each_blocks_9.length; i += 1) {
        each_blocks_9[i].c();
      }
      t5 = space();
      h22 = element("h2");
      h22.textContent = textContent_2;
      t7 = space();
      div2 = element("div");
      for (let i = 0; i < each_blocks_8.length; i += 1) {
        each_blocks_8[i].c();
      }
      t8 = space();
      h23 = element("h2");
      h23.textContent = textContent_3;
      t10 = space();
      div3 = element("div");
      for (let i = 0; i < each_blocks_7.length; i += 1) {
        each_blocks_7[i].c();
      }
      t11 = space();
      h24 = element("h2");
      h24.textContent = textContent_4;
      t13 = space();
      div4 = element("div");
      for (let i = 0; i < each_blocks_6.length; i += 1) {
        each_blocks_6[i].c();
      }
      t14 = space();
      h25 = element("h2");
      h25.textContent = textContent_5;
      t16 = space();
      div5 = element("div");
      for (let i = 0; i < each_blocks_5.length; i += 1) {
        each_blocks_5[i].c();
      }
      t17 = space();
      h26 = element("h2");
      h26.textContent = textContent_6;
      t19 = space();
      div6 = element("div");
      for (let i = 0; i < each_blocks_4.length; i += 1) {
        each_blocks_4[i].c();
      }
      t20 = space();
      h27 = element("h2");
      h27.textContent = textContent_7;
      t22 = space();
      div7 = element("div");
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].c();
      }
      t23 = space();
      h28 = element("h2");
      h28.textContent = textContent_8;
      t25 = space();
      div8 = element("div");
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].c();
      }
      t26 = space();
      h29 = element("h2");
      h29.textContent = textContent_9;
      t28 = space();
      div9 = element("div");
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t29 = space();
      h210 = element("h2");
      h210.textContent = textContent_10;
      t31 = space();
      div10 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l: function claim(nodes) {
      h20 = claim_element(nodes, "H2", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(h20) !== "svelte-zcecrh")
        h20.textContent = textContent;
      t1 = claim_space(nodes);
      div0 = claim_element(nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      for (let i = 0; i < each_blocks_10.length; i += 1) {
        each_blocks_10[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      h21 = claim_element(nodes, "H2", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(h21) !== "svelte-qxn3gx")
        h21.textContent = textContent_1;
      t4 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      for (let i = 0; i < each_blocks_9.length; i += 1) {
        each_blocks_9[i].l(div1_nodes);
      }
      div1_nodes.forEach(detach_dev);
      t5 = claim_space(nodes);
      h22 = claim_element(nodes, "H2", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(h22) !== "svelte-1ddihsw")
        h22.textContent = textContent_2;
      t7 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      for (let i = 0; i < each_blocks_8.length; i += 1) {
        each_blocks_8[i].l(div2_nodes);
      }
      div2_nodes.forEach(detach_dev);
      t8 = claim_space(nodes);
      h23 = claim_element(nodes, "H2", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(h23) !== "svelte-bojk7s")
        h23.textContent = textContent_3;
      t10 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      for (let i = 0; i < each_blocks_7.length; i += 1) {
        each_blocks_7[i].l(div3_nodes);
      }
      div3_nodes.forEach(detach_dev);
      t11 = claim_space(nodes);
      h24 = claim_element(nodes, "H2", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(h24) !== "svelte-6mp2tt")
        h24.textContent = textContent_4;
      t13 = claim_space(nodes);
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      for (let i = 0; i < each_blocks_6.length; i += 1) {
        each_blocks_6[i].l(div4_nodes);
      }
      div4_nodes.forEach(detach_dev);
      t14 = claim_space(nodes);
      h25 = claim_element(nodes, "H2", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(h25) !== "svelte-1nbfzaa")
        h25.textContent = textContent_5;
      t16 = claim_space(nodes);
      div5 = claim_element(nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      for (let i = 0; i < each_blocks_5.length; i += 1) {
        each_blocks_5[i].l(div5_nodes);
      }
      div5_nodes.forEach(detach_dev);
      t17 = claim_space(nodes);
      h26 = claim_element(nodes, "H2", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(h26) !== "svelte-b39ttn")
        h26.textContent = textContent_6;
      t19 = claim_space(nodes);
      div6 = claim_element(nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      for (let i = 0; i < each_blocks_4.length; i += 1) {
        each_blocks_4[i].l(div6_nodes);
      }
      div6_nodes.forEach(detach_dev);
      t20 = claim_space(nodes);
      h27 = claim_element(nodes, "H2", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(h27) !== "svelte-1uz6zcl")
        h27.textContent = textContent_7;
      t22 = claim_space(nodes);
      div7 = claim_element(nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].l(div7_nodes);
      }
      div7_nodes.forEach(detach_dev);
      t23 = claim_space(nodes);
      h28 = claim_element(nodes, "H2", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(h28) !== "svelte-1yxzmix")
        h28.textContent = textContent_8;
      t25 = claim_space(nodes);
      div8 = claim_element(nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].l(div8_nodes);
      }
      div8_nodes.forEach(detach_dev);
      t26 = claim_space(nodes);
      h29 = claim_element(nodes, "H2", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(h29) !== "svelte-mhoc9q")
        h29.textContent = textContent_9;
      t28 = claim_space(nodes);
      div9 = claim_element(nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].l(div9_nodes);
      }
      div9_nodes.forEach(detach_dev);
      t29 = claim_space(nodes);
      h210 = claim_element(nodes, "H2", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(h210) !== "svelte-vq3tkb")
        h210.textContent = textContent_10;
      t31 = claim_space(nodes);
      div10 = claim_element(nodes, "DIV", { class: true });
      var div10_nodes = children(div10);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div10_nodes);
      }
      div10_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(h20, file, 31, 4, 726);
      attr_dev(div0, "class", "flex flex-row");
      add_location(div0, file, 32, 4, 747);
      add_location(h21, file, 40, 4, 944);
      attr_dev(div1, "class", "flex flex-row");
      add_location(div1, file, 41, 4, 969);
      add_location(h22, file, 49, 4, 1193);
      attr_dev(div2, "class", "flex flex-row");
      add_location(div2, file, 50, 4, 1217);
      add_location(h23, file, 58, 4, 1426);
      attr_dev(div3, "class", "flex flex-row");
      add_location(div3, file, 59, 4, 1453);
      add_location(h24, file, 67, 4, 1662);
      attr_dev(div4, "class", "flex flex-row");
      add_location(div4, file, 68, 4, 1685);
      add_location(h25, file, 76, 4, 1903);
      attr_dev(div5, "class", "flex flex-row");
      add_location(div5, file, 77, 4, 1925);
      add_location(h26, file, 85, 4, 2143);
      attr_dev(div6, "class", "flex flex-row");
      add_location(div6, file, 86, 4, 2165);
      add_location(h27, file, 94, 4, 2371);
      attr_dev(div7, "class", "flex flex-row");
      add_location(div7, file, 95, 4, 2394);
      add_location(h28, file, 103, 4, 2613);
      attr_dev(div8, "class", "flex flex-row");
      add_location(div8, file, 104, 4, 2642);
      add_location(h29, file, 112, 4, 2875);
      attr_dev(div9, "class", "flex flex-row");
      add_location(div9, file, 113, 4, 2906);
      add_location(h210, file, 121, 4, 3157);
      attr_dev(div10, "class", "flex flex-row");
      add_location(div10, file, 122, 4, 3189);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, h20, anchor);
      insert_hydration_dev(target, t1, anchor);
      insert_hydration_dev(target, div0, anchor);
      for (let i = 0; i < each_blocks_10.length; i += 1) {
        if (each_blocks_10[i]) {
          each_blocks_10[i].m(div0, null);
        }
      }
      insert_hydration_dev(target, t2, anchor);
      insert_hydration_dev(target, h21, anchor);
      insert_hydration_dev(target, t4, anchor);
      insert_hydration_dev(target, div1, anchor);
      for (let i = 0; i < each_blocks_9.length; i += 1) {
        if (each_blocks_9[i]) {
          each_blocks_9[i].m(div1, null);
        }
      }
      insert_hydration_dev(target, t5, anchor);
      insert_hydration_dev(target, h22, anchor);
      insert_hydration_dev(target, t7, anchor);
      insert_hydration_dev(target, div2, anchor);
      for (let i = 0; i < each_blocks_8.length; i += 1) {
        if (each_blocks_8[i]) {
          each_blocks_8[i].m(div2, null);
        }
      }
      insert_hydration_dev(target, t8, anchor);
      insert_hydration_dev(target, h23, anchor);
      insert_hydration_dev(target, t10, anchor);
      insert_hydration_dev(target, div3, anchor);
      for (let i = 0; i < each_blocks_7.length; i += 1) {
        if (each_blocks_7[i]) {
          each_blocks_7[i].m(div3, null);
        }
      }
      insert_hydration_dev(target, t11, anchor);
      insert_hydration_dev(target, h24, anchor);
      insert_hydration_dev(target, t13, anchor);
      insert_hydration_dev(target, div4, anchor);
      for (let i = 0; i < each_blocks_6.length; i += 1) {
        if (each_blocks_6[i]) {
          each_blocks_6[i].m(div4, null);
        }
      }
      insert_hydration_dev(target, t14, anchor);
      insert_hydration_dev(target, h25, anchor);
      insert_hydration_dev(target, t16, anchor);
      insert_hydration_dev(target, div5, anchor);
      for (let i = 0; i < each_blocks_5.length; i += 1) {
        if (each_blocks_5[i]) {
          each_blocks_5[i].m(div5, null);
        }
      }
      insert_hydration_dev(target, t17, anchor);
      insert_hydration_dev(target, h26, anchor);
      insert_hydration_dev(target, t19, anchor);
      insert_hydration_dev(target, div6, anchor);
      for (let i = 0; i < each_blocks_4.length; i += 1) {
        if (each_blocks_4[i]) {
          each_blocks_4[i].m(div6, null);
        }
      }
      insert_hydration_dev(target, t20, anchor);
      insert_hydration_dev(target, h27, anchor);
      insert_hydration_dev(target, t22, anchor);
      insert_hydration_dev(target, div7, anchor);
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        if (each_blocks_3[i]) {
          each_blocks_3[i].m(div7, null);
        }
      }
      insert_hydration_dev(target, t23, anchor);
      insert_hydration_dev(target, h28, anchor);
      insert_hydration_dev(target, t25, anchor);
      insert_hydration_dev(target, div8, anchor);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        if (each_blocks_2[i]) {
          each_blocks_2[i].m(div8, null);
        }
      }
      insert_hydration_dev(target, t26, anchor);
      insert_hydration_dev(target, h29, anchor);
      insert_hydration_dev(target, t28, anchor);
      insert_hydration_dev(target, div9, anchor);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        if (each_blocks_1[i]) {
          each_blocks_1[i].m(div9, null);
        }
      }
      insert_hydration_dev(target, t29, anchor);
      insert_hydration_dev(target, h210, anchor);
      insert_hydration_dev(target, t31, anchor);
      insert_hydration_dev(target, div10, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div10, null);
        }
      }
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      for (let i = 0; i < each_value_10.length; i += 1) {
        transition_in(each_blocks_10[i]);
      }
      for (let i = 0; i < each_value_9.length; i += 1) {
        transition_in(each_blocks_9[i]);
      }
      for (let i = 0; i < each_value_8.length; i += 1) {
        transition_in(each_blocks_8[i]);
      }
      for (let i = 0; i < each_value_7.length; i += 1) {
        transition_in(each_blocks_7[i]);
      }
      for (let i = 0; i < each_value_6.length; i += 1) {
        transition_in(each_blocks_6[i]);
      }
      for (let i = 0; i < each_value_5.length; i += 1) {
        transition_in(each_blocks_5[i]);
      }
      for (let i = 0; i < each_value_4.length; i += 1) {
        transition_in(each_blocks_4[i]);
      }
      for (let i = 0; i < each_value_3.length; i += 1) {
        transition_in(each_blocks_3[i]);
      }
      for (let i = 0; i < each_value_2.length; i += 1) {
        transition_in(each_blocks_2[i]);
      }
      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks_1[i]);
      }
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o: function outro(local) {
      each_blocks_10 = each_blocks_10.filter(Boolean);
      for (let i = 0; i < each_blocks_10.length; i += 1) {
        transition_out(each_blocks_10[i]);
      }
      each_blocks_9 = each_blocks_9.filter(Boolean);
      for (let i = 0; i < each_blocks_9.length; i += 1) {
        transition_out(each_blocks_9[i]);
      }
      each_blocks_8 = each_blocks_8.filter(Boolean);
      for (let i = 0; i < each_blocks_8.length; i += 1) {
        transition_out(each_blocks_8[i]);
      }
      each_blocks_7 = each_blocks_7.filter(Boolean);
      for (let i = 0; i < each_blocks_7.length; i += 1) {
        transition_out(each_blocks_7[i]);
      }
      each_blocks_6 = each_blocks_6.filter(Boolean);
      for (let i = 0; i < each_blocks_6.length; i += 1) {
        transition_out(each_blocks_6[i]);
      }
      each_blocks_5 = each_blocks_5.filter(Boolean);
      for (let i = 0; i < each_blocks_5.length; i += 1) {
        transition_out(each_blocks_5[i]);
      }
      each_blocks_4 = each_blocks_4.filter(Boolean);
      for (let i = 0; i < each_blocks_4.length; i += 1) {
        transition_out(each_blocks_4[i]);
      }
      each_blocks_3 = each_blocks_3.filter(Boolean);
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        transition_out(each_blocks_3[i]);
      }
      each_blocks_2 = each_blocks_2.filter(Boolean);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        transition_out(each_blocks_2[i]);
      }
      each_blocks_1 = each_blocks_1.filter(Boolean);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        transition_out(each_blocks_1[i]);
      }
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(h20);
        detach_dev(t1);
        detach_dev(div0);
        detach_dev(t2);
        detach_dev(h21);
        detach_dev(t4);
        detach_dev(div1);
        detach_dev(t5);
        detach_dev(h22);
        detach_dev(t7);
        detach_dev(div2);
        detach_dev(t8);
        detach_dev(h23);
        detach_dev(t10);
        detach_dev(div3);
        detach_dev(t11);
        detach_dev(h24);
        detach_dev(t13);
        detach_dev(div4);
        detach_dev(t14);
        detach_dev(h25);
        detach_dev(t16);
        detach_dev(div5);
        detach_dev(t17);
        detach_dev(h26);
        detach_dev(t19);
        detach_dev(div6);
        detach_dev(t20);
        detach_dev(h27);
        detach_dev(t22);
        detach_dev(div7);
        detach_dev(t23);
        detach_dev(h28);
        detach_dev(t25);
        detach_dev(div8);
        detach_dev(t26);
        detach_dev(h29);
        detach_dev(t28);
        detach_dev(div9);
        detach_dev(t29);
        detach_dev(h210);
        detach_dev(t31);
        detach_dev(div10);
      }
      destroy_each(each_blocks_10, detaching);
      destroy_each(each_blocks_9, detaching);
      destroy_each(each_blocks_8, detaching);
      destroy_each(each_blocks_7, detaching);
      destroy_each(each_blocks_6, detaching);
      destroy_each(each_blocks_5, detaching);
      destroy_each(each_blocks_4, detaching);
      destroy_each(each_blocks_3, detaching);
      destroy_each(each_blocks_2, detaching);
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_2.name,
    type: "slot",
    source: '(28:2) <Hst.Variant title=\\"Input\\">',
    ctx
  });
  return block;
}
function create_if_block_3(ctx) {
  let fa;
  let current;
  fa = new Fa({
    props: {
      class: "text-gray-400",
      icon: faChevronRight
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(fa.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(fa.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(fa, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(fa.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(fa.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(fa, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_3.name,
    type: "if",
    source: "(135:37) {#if leftContent}",
    ctx
  });
  return block;
}
function create_left_slot(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (
    /*leftContent*/
    ctx[14] && create_if_block_3(ctx)
  );
  const block = {
    c: function create() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (
        /*leftContent*/
        ctx2[14]
      ) {
        if (if_block) {
          if (dirty[0] & /*leftContent*/
          16384) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_3(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(if_block_anchor);
      }
      if (if_block)
        if_block.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_left_slot.name,
    type: "slot",
    source: '(135:8) <svelte:fragment slot=\\"left\\">',
    ctx
  });
  return block;
}
function create_if_block_2(ctx) {
  let fa;
  let current;
  fa = new Fa({
    props: {
      class: "text-gray-400",
      icon: faChevronLeft
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(fa.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(fa.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(fa, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(fa.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(fa.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(fa, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(136:38) {#if rightContent}",
    ctx
  });
  return block;
}
function create_right_slot(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (
    /*rightContent*/
    ctx[15] && create_if_block_2(ctx)
  );
  const block = {
    c: function create() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (
        /*rightContent*/
        ctx2[15]
      ) {
        if (if_block) {
          if (dirty[0] & /*rightContent*/
          32768) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_2(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(if_block_anchor);
      }
      if (if_block)
        if_block.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_right_slot.name,
    type: "slot",
    source: '(136:8) <svelte:fragment slot=\\"right\\">',
    ctx
  });
  return block;
}
function create_default_slot_1(ctx) {
  let div;
  let input;
  let div_class_value;
  let current;
  input = new Input({
    props: {
      placeholder: (
        /*placeholder*/
        ctx[5]
      ),
      id: (
        /*id*/
        ctx[6]
      ),
      name: (
        /*name*/
        ctx[7]
      ),
      disabled: (
        /*disabled*/
        ctx[11]
      ),
      readonly: (
        /*readonly*/
        ctx[8]
      ),
      required: (
        /*required*/
        ctx[9]
      ),
      clearable: (
        /*clearable*/
        ctx[10]
      ),
      value: (
        /*value*/
        ctx[16]
      ),
      error: (
        /*error*/
        ctx[12]
      ),
      showError: (
        /*showError*/
        ctx[13]
      ),
      $$slots: {
        right: [create_right_slot],
        left: [create_left_slot]
      },
      $$scope: { ctx }
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
      ctx[4] + " p-4 bg-[var(--pd-content-bg)]");
      add_location(div, file, 135, 4, 3647);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(input, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const input_changes = {};
      if (dirty[0] & /*placeholder*/
      32)
        input_changes.placeholder = /*placeholder*/
        ctx2[5];
      if (dirty[0] & /*id*/
      64)
        input_changes.id = /*id*/
        ctx2[6];
      if (dirty[0] & /*name*/
      128)
        input_changes.name = /*name*/
        ctx2[7];
      if (dirty[0] & /*disabled*/
      2048)
        input_changes.disabled = /*disabled*/
        ctx2[11];
      if (dirty[0] & /*readonly*/
      256)
        input_changes.readonly = /*readonly*/
        ctx2[8];
      if (dirty[0] & /*required*/
      512)
        input_changes.required = /*required*/
        ctx2[9];
      if (dirty[0] & /*clearable*/
      1024)
        input_changes.clearable = /*clearable*/
        ctx2[10];
      if (dirty[0] & /*value*/
      65536)
        input_changes.value = /*value*/
        ctx2[16];
      if (dirty[0] & /*error*/
      4096)
        input_changes.error = /*error*/
        ctx2[12];
      if (dirty[0] & /*showError*/
      8192)
        input_changes.showError = /*showError*/
        ctx2[13];
      if (dirty[0] & /*rightContent, leftContent*/
      49152 | dirty[1] & /*$$scope*/
      16777216) {
        input_changes.$$scope = { dirty, ctx: ctx2 };
      }
      input.$set(input_changes);
      if (!current || dirty[0] & /*mode*/
      16 && div_class_value !== (div_class_value = /*mode*/
      ctx2[4] + " p-4 bg-[var(--pd-content-bg)]")) {
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
    id: create_default_slot_1.name,
    type: "slot",
    source: '(132:2) <Hst.Variant title=\\"Sandbox\\">',
    ctx
  });
  return block;
}
function create_if_block_1(ctx) {
  let hst_number;
  let updating_value;
  let current;
  function hst_number_value_binding(value) {
    ctx[22](value);
  }
  let hst_number_props = { title: "Numeric value" };
  if (
    /*numericValue*/
    ctx[2] !== void 0
  ) {
    hst_number_props.value = /*numericValue*/
    ctx[2];
  }
  hst_number = new /*Hst*/
  ctx[0].Number({ props: hst_number_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_number, "value", hst_number_value_binding));
  const block = {
    c: function create() {
      create_component(hst_number.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_number.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_number, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_number_changes = {};
      if (!updating_value && dirty[0] & /*numericValue*/
      4) {
        updating_value = true;
        hst_number_changes.value = /*numericValue*/
        ctx2[2];
        add_flush_callback(() => updating_value = false);
      }
      hst_number.$set(hst_number_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_number.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_number.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_number, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(146:6) {#if valueType === 'numeric'}",
    ctx
  });
  return block;
}
function create_if_block(ctx) {
  let hst_text;
  let updating_value;
  let current;
  function hst_text_value_binding(value) {
    ctx[23](value);
  }
  let hst_text_props = { title: "Text value" };
  if (
    /*textValue*/
    ctx[3] !== void 0
  ) {
    hst_text_props.value = /*textValue*/
    ctx[3];
  }
  hst_text = new /*Hst*/
  ctx[0].Text({ props: hst_text_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text, "value", hst_text_value_binding));
  const block = {
    c: function create() {
      create_component(hst_text.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_text.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_text, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_text_changes = {};
      if (!updating_value && dirty[0] & /*textValue*/
      8) {
        updating_value = true;
        hst_text_changes.value = /*textValue*/
        ctx2[3];
        add_flush_callback(() => updating_value = false);
      }
      hst_text.$set(hst_text_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_text.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_text.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_text, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(149:6) {#if valueType === 'text'}",
    ctx
  });
  return block;
}
function create_controls_slot(ctx) {
  let hst_radio0;
  let updating_value;
  let t0;
  let hst_text0;
  let updating_value_1;
  let t1;
  let hst_text1;
  let updating_value_2;
  let t2;
  let hst_text2;
  let updating_value_3;
  let t3;
  let hst_radio1;
  let updating_value_4;
  let t4;
  let t5;
  let t6;
  let hst_checkbox0;
  let updating_value_5;
  let t7;
  let hst_checkbox1;
  let updating_value_6;
  let t8;
  let hst_checkbox2;
  let updating_value_7;
  let t9;
  let hst_checkbox3;
  let updating_value_8;
  let t10;
  let hst_text3;
  let updating_value_9;
  let t11;
  let hst_checkbox4;
  let updating_value_10;
  let t12;
  let hst_checkbox5;
  let updating_value_11;
  let t13;
  let hst_checkbox6;
  let updating_value_12;
  let current;
  function hst_radio0_value_binding(value) {
    ctx[17](value);
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
    ctx[4] !== void 0
  ) {
    hst_radio0_props.value = /*mode*/
    ctx[4];
  }
  hst_radio0 = new /*Hst*/
  ctx[0].Radio({ props: hst_radio0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_radio0, "value", hst_radio0_value_binding));
  function hst_text0_value_binding(value) {
    ctx[18](value);
  }
  let hst_text0_props = { title: "Placeholder" };
  if (
    /*placeholder*/
    ctx[5] !== void 0
  ) {
    hst_text0_props.value = /*placeholder*/
    ctx[5];
  }
  hst_text0 = new /*Hst*/
  ctx[0].Text({ props: hst_text0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text0, "value", hst_text0_value_binding));
  function hst_text1_value_binding(value) {
    ctx[19](value);
  }
  let hst_text1_props = { title: "ID" };
  if (
    /*id*/
    ctx[6] !== void 0
  ) {
    hst_text1_props.value = /*id*/
    ctx[6];
  }
  hst_text1 = new /*Hst*/
  ctx[0].Text({ props: hst_text1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text1, "value", hst_text1_value_binding));
  function hst_text2_value_binding(value) {
    ctx[20](value);
  }
  let hst_text2_props = { title: "Name" };
  if (
    /*name*/
    ctx[7] !== void 0
  ) {
    hst_text2_props.value = /*name*/
    ctx[7];
  }
  hst_text2 = new /*Hst*/
  ctx[0].Text({ props: hst_text2_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text2, "value", hst_text2_value_binding));
  function hst_radio1_value_binding(value) {
    ctx[21](value);
  }
  let hst_radio1_props = {
    options: [{ label: "text", value: "text" }, { label: "numeric", value: "numeric" }],
    title: "Value type"
  };
  if (
    /*valueType*/
    ctx[1] !== void 0
  ) {
    hst_radio1_props.value = /*valueType*/
    ctx[1];
  }
  hst_radio1 = new /*Hst*/
  ctx[0].Radio({ props: hst_radio1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_radio1, "value", hst_radio1_value_binding));
  let if_block0 = (
    /*valueType*/
    ctx[1] === "numeric" && create_if_block_1(ctx)
  );
  let if_block1 = (
    /*valueType*/
    ctx[1] === "text" && create_if_block(ctx)
  );
  function hst_checkbox0_value_binding(value) {
    ctx[24](value);
  }
  let hst_checkbox0_props = { title: "Read-only" };
  if (
    /*readonly*/
    ctx[8] !== void 0
  ) {
    hst_checkbox0_props.value = /*readonly*/
    ctx[8];
  }
  hst_checkbox0 = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox0_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox0, "value", hst_checkbox0_value_binding));
  function hst_checkbox1_value_binding(value) {
    ctx[25](value);
  }
  let hst_checkbox1_props = { title: "Disabled" };
  if (
    /*disabled*/
    ctx[11] !== void 0
  ) {
    hst_checkbox1_props.value = /*disabled*/
    ctx[11];
  }
  hst_checkbox1 = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox1_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox1, "value", hst_checkbox1_value_binding));
  function hst_checkbox2_value_binding(value) {
    ctx[26](value);
  }
  let hst_checkbox2_props = { title: "Required" };
  if (
    /*required*/
    ctx[9] !== void 0
  ) {
    hst_checkbox2_props.value = /*required*/
    ctx[9];
  }
  hst_checkbox2 = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox2_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox2, "value", hst_checkbox2_value_binding));
  function hst_checkbox3_value_binding(value) {
    ctx[27](value);
  }
  let hst_checkbox3_props = { title: "Clearable" };
  if (
    /*clearable*/
    ctx[10] !== void 0
  ) {
    hst_checkbox3_props.value = /*clearable*/
    ctx[10];
  }
  hst_checkbox3 = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox3_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox3, "value", hst_checkbox3_value_binding));
  function hst_text3_value_binding(value) {
    ctx[28](value);
  }
  let hst_text3_props = { title: "Error" };
  if (
    /*error*/
    ctx[12] !== void 0
  ) {
    hst_text3_props.value = /*error*/
    ctx[12];
  }
  hst_text3 = new /*Hst*/
  ctx[0].Text({ props: hst_text3_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text3, "value", hst_text3_value_binding));
  function hst_checkbox4_value_binding(value) {
    ctx[29](value);
  }
  let hst_checkbox4_props = { title: "Show error" };
  if (
    /*showError*/
    ctx[13] !== void 0
  ) {
    hst_checkbox4_props.value = /*showError*/
    ctx[13];
  }
  hst_checkbox4 = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox4_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox4, "value", hst_checkbox4_value_binding));
  function hst_checkbox5_value_binding(value) {
    ctx[30](value);
  }
  let hst_checkbox5_props = { title: "Left content" };
  if (
    /*leftContent*/
    ctx[14] !== void 0
  ) {
    hst_checkbox5_props.value = /*leftContent*/
    ctx[14];
  }
  hst_checkbox5 = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox5_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox5, "value", hst_checkbox5_value_binding));
  function hst_checkbox6_value_binding(value) {
    ctx[31](value);
  }
  let hst_checkbox6_props = { title: "Right content" };
  if (
    /*rightContent*/
    ctx[15] !== void 0
  ) {
    hst_checkbox6_props.value = /*rightContent*/
    ctx[15];
  }
  hst_checkbox6 = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox6_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox6, "value", hst_checkbox6_value_binding));
  const block = {
    c: function create() {
      create_component(hst_radio0.$$.fragment);
      t0 = space();
      create_component(hst_text0.$$.fragment);
      t1 = space();
      create_component(hst_text1.$$.fragment);
      t2 = space();
      create_component(hst_text2.$$.fragment);
      t3 = space();
      create_component(hst_radio1.$$.fragment);
      t4 = space();
      if (if_block0)
        if_block0.c();
      t5 = space();
      if (if_block1)
        if_block1.c();
      t6 = space();
      create_component(hst_checkbox0.$$.fragment);
      t7 = space();
      create_component(hst_checkbox1.$$.fragment);
      t8 = space();
      create_component(hst_checkbox2.$$.fragment);
      t9 = space();
      create_component(hst_checkbox3.$$.fragment);
      t10 = space();
      create_component(hst_text3.$$.fragment);
      t11 = space();
      create_component(hst_checkbox4.$$.fragment);
      t12 = space();
      create_component(hst_checkbox5.$$.fragment);
      t13 = space();
      create_component(hst_checkbox6.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_radio0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(hst_text0.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(hst_text1.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(hst_text2.$$.fragment, nodes);
      t3 = claim_space(nodes);
      claim_component(hst_radio1.$$.fragment, nodes);
      t4 = claim_space(nodes);
      if (if_block0)
        if_block0.l(nodes);
      t5 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      t6 = claim_space(nodes);
      claim_component(hst_checkbox0.$$.fragment, nodes);
      t7 = claim_space(nodes);
      claim_component(hst_checkbox1.$$.fragment, nodes);
      t8 = claim_space(nodes);
      claim_component(hst_checkbox2.$$.fragment, nodes);
      t9 = claim_space(nodes);
      claim_component(hst_checkbox3.$$.fragment, nodes);
      t10 = claim_space(nodes);
      claim_component(hst_text3.$$.fragment, nodes);
      t11 = claim_space(nodes);
      claim_component(hst_checkbox4.$$.fragment, nodes);
      t12 = claim_space(nodes);
      claim_component(hst_checkbox5.$$.fragment, nodes);
      t13 = claim_space(nodes);
      claim_component(hst_checkbox6.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_radio0, target, anchor);
      insert_hydration_dev(target, t0, anchor);
      mount_component(hst_text0, target, anchor);
      insert_hydration_dev(target, t1, anchor);
      mount_component(hst_text1, target, anchor);
      insert_hydration_dev(target, t2, anchor);
      mount_component(hst_text2, target, anchor);
      insert_hydration_dev(target, t3, anchor);
      mount_component(hst_radio1, target, anchor);
      insert_hydration_dev(target, t4, anchor);
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration_dev(target, t5, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration_dev(target, t6, anchor);
      mount_component(hst_checkbox0, target, anchor);
      insert_hydration_dev(target, t7, anchor);
      mount_component(hst_checkbox1, target, anchor);
      insert_hydration_dev(target, t8, anchor);
      mount_component(hst_checkbox2, target, anchor);
      insert_hydration_dev(target, t9, anchor);
      mount_component(hst_checkbox3, target, anchor);
      insert_hydration_dev(target, t10, anchor);
      mount_component(hst_text3, target, anchor);
      insert_hydration_dev(target, t11, anchor);
      mount_component(hst_checkbox4, target, anchor);
      insert_hydration_dev(target, t12, anchor);
      mount_component(hst_checkbox5, target, anchor);
      insert_hydration_dev(target, t13, anchor);
      mount_component(hst_checkbox6, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_radio0_changes = {};
      if (!updating_value && dirty[0] & /*mode*/
      16) {
        updating_value = true;
        hst_radio0_changes.value = /*mode*/
        ctx2[4];
        add_flush_callback(() => updating_value = false);
      }
      hst_radio0.$set(hst_radio0_changes);
      const hst_text0_changes = {};
      if (!updating_value_1 && dirty[0] & /*placeholder*/
      32) {
        updating_value_1 = true;
        hst_text0_changes.value = /*placeholder*/
        ctx2[5];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_text0.$set(hst_text0_changes);
      const hst_text1_changes = {};
      if (!updating_value_2 && dirty[0] & /*id*/
      64) {
        updating_value_2 = true;
        hst_text1_changes.value = /*id*/
        ctx2[6];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_text1.$set(hst_text1_changes);
      const hst_text2_changes = {};
      if (!updating_value_3 && dirty[0] & /*name*/
      128) {
        updating_value_3 = true;
        hst_text2_changes.value = /*name*/
        ctx2[7];
        add_flush_callback(() => updating_value_3 = false);
      }
      hst_text2.$set(hst_text2_changes);
      const hst_radio1_changes = {};
      if (!updating_value_4 && dirty[0] & /*valueType*/
      2) {
        updating_value_4 = true;
        hst_radio1_changes.value = /*valueType*/
        ctx2[1];
        add_flush_callback(() => updating_value_4 = false);
      }
      hst_radio1.$set(hst_radio1_changes);
      if (
        /*valueType*/
        ctx2[1] === "numeric"
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty[0] & /*valueType*/
          2) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t5.parentNode, t5);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (
        /*valueType*/
        ctx2[1] === "text"
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty[0] & /*valueType*/
          2) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(t6.parentNode, t6);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      const hst_checkbox0_changes = {};
      if (!updating_value_5 && dirty[0] & /*readonly*/
      256) {
        updating_value_5 = true;
        hst_checkbox0_changes.value = /*readonly*/
        ctx2[8];
        add_flush_callback(() => updating_value_5 = false);
      }
      hst_checkbox0.$set(hst_checkbox0_changes);
      const hst_checkbox1_changes = {};
      if (!updating_value_6 && dirty[0] & /*disabled*/
      2048) {
        updating_value_6 = true;
        hst_checkbox1_changes.value = /*disabled*/
        ctx2[11];
        add_flush_callback(() => updating_value_6 = false);
      }
      hst_checkbox1.$set(hst_checkbox1_changes);
      const hst_checkbox2_changes = {};
      if (!updating_value_7 && dirty[0] & /*required*/
      512) {
        updating_value_7 = true;
        hst_checkbox2_changes.value = /*required*/
        ctx2[9];
        add_flush_callback(() => updating_value_7 = false);
      }
      hst_checkbox2.$set(hst_checkbox2_changes);
      const hst_checkbox3_changes = {};
      if (!updating_value_8 && dirty[0] & /*clearable*/
      1024) {
        updating_value_8 = true;
        hst_checkbox3_changes.value = /*clearable*/
        ctx2[10];
        add_flush_callback(() => updating_value_8 = false);
      }
      hst_checkbox3.$set(hst_checkbox3_changes);
      const hst_text3_changes = {};
      if (!updating_value_9 && dirty[0] & /*error*/
      4096) {
        updating_value_9 = true;
        hst_text3_changes.value = /*error*/
        ctx2[12];
        add_flush_callback(() => updating_value_9 = false);
      }
      hst_text3.$set(hst_text3_changes);
      const hst_checkbox4_changes = {};
      if (!updating_value_10 && dirty[0] & /*showError*/
      8192) {
        updating_value_10 = true;
        hst_checkbox4_changes.value = /*showError*/
        ctx2[13];
        add_flush_callback(() => updating_value_10 = false);
      }
      hst_checkbox4.$set(hst_checkbox4_changes);
      const hst_checkbox5_changes = {};
      if (!updating_value_11 && dirty[0] & /*leftContent*/
      16384) {
        updating_value_11 = true;
        hst_checkbox5_changes.value = /*leftContent*/
        ctx2[14];
        add_flush_callback(() => updating_value_11 = false);
      }
      hst_checkbox5.$set(hst_checkbox5_changes);
      const hst_checkbox6_changes = {};
      if (!updating_value_12 && dirty[0] & /*rightContent*/
      32768) {
        updating_value_12 = true;
        hst_checkbox6_changes.value = /*rightContent*/
        ctx2[15];
        add_flush_callback(() => updating_value_12 = false);
      }
      hst_checkbox6.$set(hst_checkbox6_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_radio0.$$.fragment, local);
      transition_in(hst_text0.$$.fragment, local);
      transition_in(hst_text1.$$.fragment, local);
      transition_in(hst_text2.$$.fragment, local);
      transition_in(hst_radio1.$$.fragment, local);
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(hst_checkbox0.$$.fragment, local);
      transition_in(hst_checkbox1.$$.fragment, local);
      transition_in(hst_checkbox2.$$.fragment, local);
      transition_in(hst_checkbox3.$$.fragment, local);
      transition_in(hst_text3.$$.fragment, local);
      transition_in(hst_checkbox4.$$.fragment, local);
      transition_in(hst_checkbox5.$$.fragment, local);
      transition_in(hst_checkbox6.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_radio0.$$.fragment, local);
      transition_out(hst_text0.$$.fragment, local);
      transition_out(hst_text1.$$.fragment, local);
      transition_out(hst_text2.$$.fragment, local);
      transition_out(hst_radio1.$$.fragment, local);
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(hst_checkbox0.$$.fragment, local);
      transition_out(hst_checkbox1.$$.fragment, local);
      transition_out(hst_checkbox2.$$.fragment, local);
      transition_out(hst_checkbox3.$$.fragment, local);
      transition_out(hst_text3.$$.fragment, local);
      transition_out(hst_checkbox4.$$.fragment, local);
      transition_out(hst_checkbox5.$$.fragment, local);
      transition_out(hst_checkbox6.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
        detach_dev(t2);
        detach_dev(t3);
        detach_dev(t4);
        detach_dev(t5);
        detach_dev(t6);
        detach_dev(t7);
        detach_dev(t8);
        detach_dev(t9);
        detach_dev(t10);
        detach_dev(t11);
        detach_dev(t12);
        detach_dev(t13);
      }
      destroy_component(hst_radio0, detaching);
      destroy_component(hst_text0, detaching);
      destroy_component(hst_text1, detaching);
      destroy_component(hst_text2, detaching);
      destroy_component(hst_radio1, detaching);
      if (if_block0)
        if_block0.d(detaching);
      if (if_block1)
        if_block1.d(detaching);
      destroy_component(hst_checkbox0, detaching);
      destroy_component(hst_checkbox1, detaching);
      destroy_component(hst_checkbox2, detaching);
      destroy_component(hst_checkbox3, detaching);
      destroy_component(hst_text3, detaching);
      destroy_component(hst_checkbox4, detaching);
      destroy_component(hst_checkbox5, detaching);
      destroy_component(hst_checkbox6, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot.name,
    type: "slot",
    source: '(140:4) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot(ctx) {
  let hst_variant0;
  let t;
  let hst_variant1;
  let current;
  hst_variant0 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Input",
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant1 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Sandbox",
      $$slots: {
        controls: [create_controls_slot],
        default: [create_default_slot_1]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant0.$$.fragment);
      t = space();
      create_component(hst_variant1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_variant0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(hst_variant1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant0, target, anchor);
      insert_hydration_dev(target, t, anchor);
      mount_component(hst_variant1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant0_changes = {};
      if (dirty[1] & /*$$scope*/
      16777216) {
        hst_variant0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant0.$set(hst_variant0_changes);
      const hst_variant1_changes = {};
      if (dirty[0] & /*rightContent, leftContent, showError, error, clearable, required, disabled, readonly, textValue, valueType, numericValue, name, id, placeholder, mode, value*/
      131070 | dirty[1] & /*$$scope*/
      16777216) {
        hst_variant1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant1.$set(hst_variant1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant0.$$.fragment, local);
      transition_in(hst_variant1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant0.$$.fragment, local);
      transition_out(hst_variant1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
      destroy_component(hst_variant0, detaching);
      destroy_component(hst_variant1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: "(27:0) <Hst.Story>",
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
      $$slots: { default: [create_default_slot] },
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
    p: function update(ctx2, dirty) {
      const hst_story_changes = {};
      if (dirty[0] & /*rightContent, leftContent, showError, error, clearable, required, disabled, readonly, textValue, valueType, numericValue, name, id, placeholder, mode, value*/
      131070 | dirty[1] & /*$$scope*/
      16777216) {
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
  let value;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Input_story", slots, []);
  let { Hst } = $$props;
  let mode = "dark-scheme";
  let placeholder = "default placeholder";
  let id = "";
  let name = "";
  let valueType = "text";
  let numericValue;
  let textValue;
  let readonly = false;
  let required = false;
  let clearable = false;
  let disabled = false;
  let error = "";
  let showError = true;
  let leftContent = false;
  let rightContent = false;
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
  function hst_radio0_value_binding(value2) {
    mode = value2;
    $$invalidate(4, mode);
  }
  function hst_text0_value_binding(value2) {
    placeholder = value2;
    $$invalidate(5, placeholder);
  }
  function hst_text1_value_binding(value2) {
    id = value2;
    $$invalidate(6, id);
  }
  function hst_text2_value_binding(value2) {
    name = value2;
    $$invalidate(7, name);
  }
  function hst_radio1_value_binding(value2) {
    valueType = value2;
    $$invalidate(1, valueType);
  }
  function hst_number_value_binding(value2) {
    numericValue = value2;
    $$invalidate(2, numericValue);
  }
  function hst_text_value_binding(value2) {
    textValue = value2;
    $$invalidate(3, textValue);
  }
  function hst_checkbox0_value_binding(value2) {
    readonly = value2;
    $$invalidate(8, readonly);
  }
  function hst_checkbox1_value_binding(value2) {
    disabled = value2;
    $$invalidate(11, disabled);
  }
  function hst_checkbox2_value_binding(value2) {
    required = value2;
    $$invalidate(9, required);
  }
  function hst_checkbox3_value_binding(value2) {
    clearable = value2;
    $$invalidate(10, clearable);
  }
  function hst_text3_value_binding(value2) {
    error = value2;
    $$invalidate(12, error);
  }
  function hst_checkbox4_value_binding(value2) {
    showError = value2;
    $$invalidate(13, showError);
  }
  function hst_checkbox5_value_binding(value2) {
    leftContent = value2;
    $$invalidate(14, leftContent);
  }
  function hst_checkbox6_value_binding(value2) {
    rightContent = value2;
    $$invalidate(15, rightContent);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({
    Input,
    faChevronRight,
    faChevronLeft,
    Fa,
    Hst,
    schemes,
    mode,
    placeholder,
    id,
    name,
    valueType,
    numericValue,
    textValue,
    readonly,
    required,
    clearable,
    disabled,
    error,
    showError,
    leftContent,
    rightContent,
    value
  });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("mode" in $$props2)
      $$invalidate(4, mode = $$props2.mode);
    if ("placeholder" in $$props2)
      $$invalidate(5, placeholder = $$props2.placeholder);
    if ("id" in $$props2)
      $$invalidate(6, id = $$props2.id);
    if ("name" in $$props2)
      $$invalidate(7, name = $$props2.name);
    if ("valueType" in $$props2)
      $$invalidate(1, valueType = $$props2.valueType);
    if ("numericValue" in $$props2)
      $$invalidate(2, numericValue = $$props2.numericValue);
    if ("textValue" in $$props2)
      $$invalidate(3, textValue = $$props2.textValue);
    if ("readonly" in $$props2)
      $$invalidate(8, readonly = $$props2.readonly);
    if ("required" in $$props2)
      $$invalidate(9, required = $$props2.required);
    if ("clearable" in $$props2)
      $$invalidate(10, clearable = $$props2.clearable);
    if ("disabled" in $$props2)
      $$invalidate(11, disabled = $$props2.disabled);
    if ("error" in $$props2)
      $$invalidate(12, error = $$props2.error);
    if ("showError" in $$props2)
      $$invalidate(13, showError = $$props2.showError);
    if ("leftContent" in $$props2)
      $$invalidate(14, leftContent = $$props2.leftContent);
    if ("rightContent" in $$props2)
      $$invalidate(15, rightContent = $$props2.rightContent);
    if ("value" in $$props2)
      $$invalidate(16, value = $$props2.value);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & /*valueType, textValue, numericValue*/
    14) {
      $$invalidate(16, value = valueType === "text" ? textValue : numericValue);
    }
  };
  return [
    Hst,
    valueType,
    numericValue,
    textValue,
    mode,
    placeholder,
    id,
    name,
    readonly,
    required,
    clearable,
    disabled,
    error,
    showError,
    leftContent,
    rightContent,
    value,
    hst_radio0_value_binding,
    hst_text0_value_binding,
    hst_text1_value_binding,
    hst_text2_value_binding,
    hst_radio1_value_binding,
    hst_number_value_binding,
    hst_text_value_binding,
    hst_checkbox0_value_binding,
    hst_checkbox1_value_binding,
    hst_checkbox2_value_binding,
    hst_checkbox3_value_binding,
    hst_text3_value_binding,
    hst_checkbox4_value_binding,
    hst_checkbox5_value_binding,
    hst_checkbox6_value_binding
  ];
}
class Input_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, { Hst: 0 }, null, [-1, -1]);
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
  { "id": "src-stories-button-story-svelte", "path": ["Button"], "filePath": "src/stories/Button.story.svelte", "story": { "id": "src-stories-button-story-svelte", "title": "Button", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-stories-button-story-svelte-0", "title": "Text button", "icon": null, "iconColor": null }, { "id": "src-stories-button-story-svelte-1", "title": "Text+Icon button", "icon": null, "iconColor": null }, { "id": "src-stories-button-story-svelte-2", "title": "Sandbox", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte4", "index": 0, component: Button_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-button-story-svelte-CPoH_W3a.js"), true ? [] : void 0) },
  { "id": "src-stories-input-story-svelte", "path": ["Input"], "filePath": "src/stories/Input.story.svelte", "story": { "id": "src-stories-input-story-svelte", "title": "Input", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-stories-input-story-svelte-0", "title": "Input", "icon": null, "iconColor": null }, { "id": "src-stories-input-story-svelte-1", "title": "Sandbox", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte4", "index": 1, component: Input_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-input-story-svelte-DYjFvw07.js"), true ? [] : void 0) },
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
      component: () => __vitePreload(() => import("./HomeView.vue-pzxhZ83q.js"), true ? __vite__mapDeps([0,1,2]) : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-DJMW5jgZ.js"), true ? __vite__mapDeps([3,2,1,4,5,6]) : void 0)
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
  "vanilla": () => __vitePreload(() => import("./vendor-C_KVm_SL.js").then((n) => n.b7), true ? [] : void 0),
  "svelte4": () => __vitePreload(() => import("./vendor-C_KVm_SL.js").then((n) => n.b8), true ? [] : void 0)
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
