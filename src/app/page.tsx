"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy } from "@/components/page/copy";
import { SelectGenders } from "@/components/page/select-genders";
import SecondaryFunctions from "@/components/page/pause";
import Send from "@/components/page/send";
import StartAndStop from "@/components/page/start-and-pause";
import { OpenTab } from "@/components/page/open";
import ClientComponent from "./clientcomponent/clientcomponent";

export default function Home() {
  return (
    <>
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
                <Copy />
                <div className="rounded-md border p-1 space-y-1">
                  <SelectGenders />
                  <Separator />
                  <SecondaryFunctions />
                </div>
              </CardTitle>
              {/* <CardDescription>
              </CardDescription> */}
            </CardHeader>
            <CardContent className="space-y-2">
              <Send />
              {/* <MainFunctions /> */}
            </CardContent>
            <CardFooter>
              <StartAndStop />
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="default">
          <Card>
            <CardHeader>
              <CardTitle>
                <Copy />
              </CardTitle>
              <CardDescription>
                <Copy />
              </CardDescription>
            </CardHeader>
            {/* <CardContent className="grid gap-4 space-y-2"></CardContent> */}
            <CardContent className="space-y-2">
              <Copy />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="other">
          <Card>
            <CardHeader>
              <CardTitle>
                <OpenTab />
              </CardTitle>
              {/* <CardDescription></CardDescription> */}
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center space-x-2">
                <Input placeholder="Enter ID; Random if Blank." />
                <Button>OK</Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-evenly">
              {/* <div className="flex justify-evenly"> */}
              <Button>Repeat Name</Button>
              <Button>Random Name</Button>
              <div className="flex items-center space-x-2">
                <Checkbox id="auto-attack" />
                <Label htmlFor="auto-attack">Auto Attack</Label>
              </div>
              {/* </div> */}
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      <ClientComponent />
    </>
  );
}
