import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Archive,
  Car,
  LogOut,
  Plus,
  Settings,
  SquareKanban,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function DashboardSidebar() {
  return (
    <div className="border-r h-screen p-4 py-8">
      <div className="flex items-center mb-10">
        <Avatar className="mr-5">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-slate-600">John Doe</p>
      </div>

      <h3 className="font-semibold text-lg mb-4 ml-2">
        Dashboard
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" className="ml-3">
                <Plus size="16" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add new car</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </h3>

      <div className="flex flex-col gap-1 mb-8">
        <Link to="/dashboard/cars">
          <Button variant="ghost" className="px-4 w-[240px] justify-between ">
            <div className="flex items-center">
              <Car className="mr-3" size="16" />
              <p className=" font-semibold ">All Cars</p>
            </div>
            <Badge>16</Badge>
          </Button>
        </Link>

        <Button variant="ghost" className="px-4 w-[240px]  justify-between">
          <div className="flex items-center">
            <SquareKanban className="mr-3" size="16" />
            <p className=" font-semibold ">Expense Types</p>
          </div>
          <Badge>2</Badge>
        </Button>

        <Button variant="ghost" className="px-4 w-[240px]  justify-between">
          <div className="flex items-center">
            <Archive className="mr-3" size="16" />
            <p className=" font-semibold ">Archives</p>
          </div>
          <Badge>4</Badge>
        </Button>
      </div>

      <h3 className="font-semibold text-lg mb-4 ml-2">Settings</h3>

      <div className="flex flex-col gap-1">
        <Link to="/dashboard/cars">
          <Button variant="ghost" className="px-4 w-[240px] justify-start">
            <Settings className="mr-3" size="16" />
            <p className=" font-semibold ">Settings</p>
          </Button>
        </Link>

        <Button variant="destructive" className="px-4 w-[240px] justify-start">
          <LogOut className="mr-3" size="16" />
          <p className=" font-semibold">Log Out</p>
        </Button>
      </div>
    </div>
  );
}
