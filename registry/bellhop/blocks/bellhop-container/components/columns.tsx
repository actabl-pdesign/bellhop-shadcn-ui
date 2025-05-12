"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';

export type Task = {
  id: string;
  taskName: string;
  status: "Pending" | "In Progress" | "Done";
  dueDate: string;
  assignedTo: string;
  priority: "Low" | "Medium" | "High";
};

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "taskName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-semibold text-neutral-700 hover:text-neutral-800 p-1 h-8 focus:ring-0"
          onClick={() =>
            column.toggleSorting(column.getIsSorted() === "asc")
          }
        >
          Task
          <ChevronUpDownIcon className="size-4"/>
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("taskName")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as Task["status"];
      let badgeColor: "yellow" | "blue" | "green" | "neutral" = "neutral";
      if (status === "Pending") badgeColor = "yellow";
      else if (status === "In Progress") badgeColor = "blue";
      else if (status === "Done") badgeColor = "green";
      return (
        <Badge variant="outline" color={badgeColor}>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "dueDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-semibold text-neutral-700 hover:text-neutral-800 p-1 h-8 focus:ring-0"
          onClick={() =>
            column.toggleSorting(column.getIsSorted() === "asc")
          }
        >
          Due Date
          <ChevronUpDownIcon className="size-4"/>
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("dueDate")}</div>
    ),
  },
  {
    accessorKey: "assignedTo",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-semibold text-neutral-700 hover:text-neutral-800 p-1 h-8 focus:ring-0"
          onClick={() =>
            column.toggleSorting(column.getIsSorted() === "asc")
          }
        >
        Assigned To
        <ChevronUpDownIcon className="size-4"/>
      </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("assignedTo")}</div>,
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => {
      const priority = row.getValue("priority") as Task["priority"];
      let badgeColor: "red" | "orange" | "green" = "green";
      if (priority === "High") badgeColor = "red";
      else if (priority === "Medium") badgeColor = "orange";
      return (
        <Badge variant="solid" color={badgeColor}>
          {priority}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const task = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(task.id)}
            >
              Copy task ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View project</DropdownMenuItem>
            <DropdownMenuItem>View details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];