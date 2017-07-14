package com.axellience.vuegwtexamples.client.examples.simplerender;

import com.axellience.vuegwt.client.component.VueComponent;
import com.axellience.vuegwt.client.jsnative.jstypes.JsArray;
import com.axellience.vuegwt.client.vnode.VNode;
import com.axellience.vuegwt.client.vnode.VNodeData;
import com.axellience.vuegwt.client.vnode.builder.VNodeBuilder;
import com.axellience.vuegwt.jsr69.component.annotations.Component;
import com.axellience.vuegwt.jsr69.component.annotations.Prop;
import com.google.gwt.regexp.shared.RegExp;
import jsinterop.annotations.JsType;

/**
 * @author Adrien Baron
 */
@JsType
@Component(hasTemplate = false)
public class AnchoredHeadingComponent extends VueComponent
{
    private static RegExp camelCasePattern = RegExp.compile("([a-z])([A-Z]+)", "g");

    @Prop(required = true)
    public Integer level;

    @Override
    protected void created() {}

    @Override
    protected VNode render(VNodeBuilder builder)
    {
        String text =
            getChildrenTextContent(this.$slots.get("default")).trim().replaceAll(" ", "-");

        String headingId = camelCasePattern.replace(text, "$1-$2").toLowerCase();

        return builder.el("h" + this.level,
            builder.el("a",
                VNodeData.get().attr("name", headingId).attr("href", "#" + headingId),
                this.$slots.get("default")));
    }

    private String getChildrenTextContent(JsArray<VNode> children)
    {
        return children.map(child ->
        {
            if (child.getChildren() != null && child.getChildren().length > 0)
                return getChildrenTextContent(child.getChildren());
            return child.getText();
        }).join("");
    }
}