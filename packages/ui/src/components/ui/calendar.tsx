"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@ui/lib/utils";
import { buttonVariants } from "@ui/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("yesp-3", className)}
      classNames={{
        months:
          "yesflex yesflex-col sm:yesflex-row yesspace-y-4 sm:yesspace-x-4 sm:yesspace-y-0",
        month: "yesspace-y-4",
        caption:
          "yesflex yesjustify-center yespt-1 yesrelative yesitems-center",
        caption_label: "yestext-sm yesfont-medium",
        nav: "yesspace-x-1 yesflex yesitems-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "yesh-7 yesw-7 yesbg-transparent yesp-0 yesopacity-50 hover:yesopacity-100",
        ),
        nav_button_previous: "yesabsolute yesleft-1",
        nav_button_next: "yesabsolute yesright-1",
        table: "yesw-full yesborder-collapse yesspace-y-1",
        head_row: "yesflex",
        head_cell:
          "yestext-muted-foreground yesrounded-md yesw-9 yesfont-normal yestext-[0.8rem]",
        row: "yesflex yesw-full yesmt-2",
        cell: "yesh-9 yesw-9 yestext-center yestext-sm yesp-0 yesrelative [&:has([aria-selected].day-range-end)]:yesrounded-r-md [&:has([aria-selected].day-outside)]:yesbg-accent/50 [&:has([aria-selected])]:yesbg-accent first:[&:has([aria-selected])]:yesrounded-l-md last:[&:has([aria-selected])]:yesrounded-r-md focus-within:yesrelative focus-within:yesz-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "yesh-9 yesw-9 yesp-0 yesfont-normal aria-selected:yesopacity-100",
        ),
        day_range_end: "yesday-range-end",
        day_selected:
          "yesbg-primary yestext-primary-foreground hover:yesbg-primary hover:yestext-primary-foreground focus:yesbg-primary focus:yestext-primary-foreground",
        day_today: "yesbg-accent yestext-accent-foreground",
        day_outside:
          "yesday-outside yestext-muted-foreground yesopacity-50 aria-selected:yesbg-accent/50 aria-selected:yestext-muted-foreground aria-selected:yesopacity-30",
        day_disabled: "yestext-muted-foreground yesopacity-50",
        day_range_middle:
          "aria-selected:yesbg-accent aria-selected:yestext-accent-foreground",
        day_hidden: "yesinvisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="yesh-4 yesw-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="yesh-4 yesw-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
