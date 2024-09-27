import RootLayout from "@/layouts/RootLayout";
import { alerts } from "@/mocks/alerts";

import AlertsTable from ".";

import type { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Components/Alerts/AlertsTable",
  component: AlertsTable,
} as Meta<typeof AlertsTable>;

const Template: StoryFn<typeof AlertsTable> = (args) => (
  <RootLayout>
    <AlertsTable {...args} />
  </RootLayout>
);

export const Default = Template.bind({});

Default.args = {
  alerts,
  onEdit: console.log,
  onRemove: console.log,
};
