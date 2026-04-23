import { TextAreaField } from "./TextAreaField";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Molecules/TextAreaField",
  component: TextAreaField,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label text for the textarea field",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    errorMessage: {
      control: "text",
      description: "Error message to display",
    },
    helperText: {
      control: "text",
      description: "Helper text to display",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    required: {
      control: "boolean",
      description: "Required field indicator",
    },
  },
} satisfies Meta<typeof TextAreaField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Message",
    id: "message",
    placeholder: "Enter your message here...",
  },
};

export const Required: Story = {
  args: {
    label: "Required Message",
    id: "required-message",
    placeholder: "This field is required",
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Message",
    id: "message-error",
    placeholder: "Enter your message",
    errorMessage: "This field is required",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Field",
    id: "disabled-message",
    placeholder: "This field is disabled",
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    label: "Comments",
    id: "comments",
    value: "This is a pre-filled message in the textarea field.",
    placeholder: "Enter comments",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Description",
    id: "description",
    placeholder: "Enter description...",
    helperText: "Provide a detailed description of the item",
  },
};
