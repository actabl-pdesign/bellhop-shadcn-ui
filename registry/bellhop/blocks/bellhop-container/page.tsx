"use client";

import "./bellhop.css"
import * as React from "react";

import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";

import { SideMenu } from "@/components/sidemenu-legacy";
import HeaderLegacy from "@/components/header-legacy";

const data =[
  {
    id: "Task-5101",
    taskName: "Finalize Q3 report",
    status: "Pending",
    dueDate: "2024-08-01",
    assignedTo: "Alice",
    priority: "High",
  },
  {
    id: "Task-5102",
    taskName: "Client follow-up call",
    status: "In Progress",
    dueDate: "2024-07-29",
    assignedTo: "Bob",
    priority: "Medium",
  },
  {
    id: "Task-5103",
    taskName: "Update website copy",
    status: "Done",
    dueDate: "2024-07-22",
    assignedTo: "Charlie",
    priority: "Low",
  },
  {
    id: "Task-5104",
    taskName: "Prepare presentation slides",
    status: "Pending",
    dueDate: "2024-08-05",
    assignedTo: "Alice",
    priority: "High",
  },
  {
    id: "Task-5105",
    taskName: "System maintenance check",
    status: "In Progress",
    dueDate: "2024-07-30",
    assignedTo: "David",
    priority: "Medium",
  },
  {
    id: "Task-5106",
    taskName: "Organize team meeting",
    status: "Pending",
    dueDate: "2024-08-10",
    assignedTo: "Eve",
    priority: "Low",
  },
  {
    id: "Task-5107",
    taskName: "Review project proposal",
    status: "Done",
    dueDate: "2024-07-20",
    assignedTo: "Frank",
    priority: "Medium",
  },
  {
    id: "Task-5108",
    taskName: "Develop new feature",
    status: "In Progress",
    dueDate: "2024-08-15",
    assignedTo: "Grace",
    priority: "High",
  },
  {
    id: "Task-5109",
    taskName: "Fix security vulnerabilities",
    status: "Pending",
    dueDate: "2024-08-12",
    assignedTo: "Alice",
    priority: "High",
  },
  {
    id: "Task-5110",
    taskName: "Update user documentation",
    status: "Done",
    dueDate: "2024-07-25",
    assignedTo: "Bob",
    priority: "Low",
  }
];

export default function Page() {
 return (
    <div className="flex flex-col h-screen bg-muted/80">
      <HeaderLegacy logoVariant="psSymbol" />

      <div className="flex flex-1 overflow-hidden">
        <div className="flex-none bg-sidebar-background shadow-md">
          <SideMenu variant="ps" />
        </div>

        <div className="flex-1 p-4 md:gap-6 md:p-6 overflow-y-auto">
          <div className="flex flex-col p-4 lg:p-6 gap-4 bg-card rounded-xl shadow-md">
            <div className="page-header relative">
              <h1 className="text-xl font-semibold">Tasks</h1>
              <p className="text-xs font-regular text-muted-foreground">Follow your daily tasks and make the most of your day.</p>
            </div>
            <div>
              <DataTable data={data} columns={columns} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}