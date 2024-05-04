import { ListFilter, LogOut, MessageSquareDiff, Search, User } from "lucide-react";
import { Input } from "../ui/input";
import ThemeSwitch from "./theme-switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { conversations } from './../../dummy-data/db';
import Conversation from "./conversation";
import { UserButton } from "@clerk/nextjs";

const LeftPanel = () => {
    // const conversations = [];

    return (
        <div className='w-1/4 border-gray-600 border-r'>
            <div className='sticky top-0 bg-left-panel z-10'>
                {/* Header */}
                <div className='flex justify-between bg-gray-primary p-3 items-center'>
                    {/* <User size={24} /> */}
                    <UserButton></UserButton>
                    {/* <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar> */}


                    <div className='flex items-center gap-3'>
                        <MessageSquareDiff size={20} /> {/* TODO: This line will be replaced with <UserListDialog /> */}
                        <ThemeSwitch />
                        {/* <LogOut size={20} className='cursor-pointer' /> */}
                    </div>
                </div>
                <div className='p-3 flex items-center'>
                    {/* Search */}
                    <div className='relative h-10 mx-3 flex-1'>
                        <Search
                            className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10'
                            size={18}
                        />
                        <Input
                            type='text'
                            placeholder='Search Chat'
                            className='pl-10 py-2 text-sm w-full rounded shadow-sm bg-blue-100 focus-visible:ring-transparent'
                        /> 
                    </div>
                    <ListFilter className='cursor-pointer' />
                </div>
            </div>

            {/* Chat List */}
            <div className='my-3 flex flex-col gap-0 max-h-[80%] overflow-auto'>
                {/* Conversations will go here*/}
                {conversations.map((conversation)=>(
                    <Conversation key={conversation._id} conversation={conversation}></Conversation>
                ))}
                {conversations?.length === 0 && (
                    <>
                        <p className='text-center text-fuchsia-600 text-sm mt-3'>No conversations yet</p>
                        <p className='text-center text-fuchsia-600 text-sm mt-3 '>
                            We understand {"you're"} an introvert, but {"you've"} got to start somewhere ?
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};
export default LeftPanel;