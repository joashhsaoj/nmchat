"use client";

import { CirclePlay } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import MainFunctions from "./functions/main-functions";
import SecondaryFunctions from "./functions/secondary-functions";
import { MenubarDemo } from "./functions/test";
import { SelectGenders } from "./functions/select-genders";

export default function UI() {
  // const [tabs, setTabs] = useState("general");
  // // ?
  // const onTabChange = (value: SetStateAction<string>) => {
  //   setTabs(value);
  // };
  return (
    <Tabs
      defaultValue="general"
      className="w-[400px] text-container"
      // value={tabs}
      // onValueChange={onTabChange}
    >
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="default">Default</TabsTrigger>
        <TabsTrigger value="other">Other</TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        <Card>
          <CardHeader>
            <CardTitle className="space-y-2">
              <SelectGenders />
              <SecondaryFunctions />
            </CardTitle>
            {/* <CardDescription>
            </CardDescription> */}
          </CardHeader>
          <CardContent className="space-y-2">
            {/* <div className="flex">
                <Label className="font-bold">Functions:</Label>
              </div>
              <div className="flex items-center space-x-4 rounded-md border p-4">
              </div> */}
            <MainFunctions />
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <CirclePlay /> Start Matching
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="default">
        <Card>
          <CardHeader>
            <CardTitle></CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          {/* <CardContent className="grid gap-4 space-y-2"></CardContent> */}
          <CardContent className="space-y-2">
            {/* delete code */}
            {/* <div className="flex">
              <Label className="font-bold">Settings:</Label>
            </div>
            <div className="rounded-md border p-4 space-y-4">
              <GenderSelect />
            </div> */}
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="other">
        <Card>
          <CardHeader>
            <CardTitle>
              <MenubarDemo />
            </CardTitle>
            {/* <CardDescription></CardDescription> */}
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center space-x-2">
              <Input placeholder="Please enter ID; Random if blank." />
              <Button>OK</Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-evenly">
            {/* <div className="flex justify-evenly"> */}
            <Button>Repeat current name</Button>
            <Button>Random name</Button>
            {/* </div> */}
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
