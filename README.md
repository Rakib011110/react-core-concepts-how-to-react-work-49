# react-core-concepts-how-to-react-work-49

<details>
<summary>
What is npm

</summary>
<br>
  
- npm (short for "Node Package Manager") is a package manager for the JavaScript programming language. It is used primarily for managing and sharing reusable code modules, such as libraries, frameworks, and tools, that can be used in Node.js applications or in web browsers
<br> 
npm allows developers to easily download and install packages from a central repository, and also provides a command-line interface (CLI) for managing those packages, including installing, updating, and uninstalling them. Additionally, npm allows developers to publish their own packages, making it easy to share code with others in the JavaScript community.
<br>
npm is included with Node.js, so if you have Node.js installed on your computer, you already have npm.

- বাংলা ঃ
  npm হল জাভাস্ক্রিপ্ট প্রোগ্রামিং ভাষার জন্য একটি প্যাকেজ ম্যানেজার। এটি প্রাথমিকভাবে নোড.জেএস অ্যাপ্লিকেশন বা ওয়েব ব্রাউজারে ব্যবহৃত লাইব্রেরি, ফ্রেমওয়ার্ক এবং টুলস উপস্থাপন করতে ব্যবহৃত হয়।

<br>
npm এর মাধ্যমে ডেভেলপাররা একটি সেন্ট্রাল রিপোজিটরিতে প্যাকেজ ডাউনলোড এবং ইনস্টল করতে পারেন, এবং একটি কমান্ড-লাইন ইন্টারফেস (সিএলআই) সরবরাহ করে সেগুলো পরিচালনা করতে পারেন, যা ইনস্টল করা, আপডেট করা এবং আনইনস্টল করা সহ প্যাকেজ ম্যানেজমেন্ট সম্পর্কিত অন্যান্য কাজও সহজ করে দেয়। উত্পাদকদের জন্য একইভাবে npm প্যাকেজ প্রকাশ করতে দেওয়া হয়, যার মাধ্যমে জাভাস্ক্রিপ্ট সম্প্রদায়ের সাথে কোড ভাগ করা সহজ হয়।

</details>

<details>
<summary>
  What is react Hook

</summary>
<br>
  
- React hooks work by allowing you to use state and other React features in functional components, which are the simplest and most lightweight way to define a component in React.
<br>

When you call a hook inside a functional component, React sets up the state and manages the lifecycle of the component for you. For example, when you use the useState hook, React creates a state variable and a function to update that variable. Whenever you call the update function, React updates the state and triggers a re-render of the component.
<br>

Similarly, when you use the useEffect hook, React runs the effect function (which you provide as an argument to the hook) after the component is rendered, and then again whenever the component is updated (unless you specify a dependency array to limit when the effect runs).
<br>

Under the hood, React uses a "fiber" reconciliation algorithm to efficiently update the component tree based on changes to props, state, and context. This allows React to update the DOM and other parts of the UI as efficiently as possible, without re-rendering more than necessary.
<br>

Overall, React hooks provide a simple and efficient way to add state and other features to functional components, making it easier to write reusable and maintainable code.
<br>

- React হুকগুলি ফাংশনাল কম্পোনেন্টের মধ্যে state এবং অন্যান্য React ফিচার ব্যবহার করার সুবিধা প্রদান করে। হুকগুলি ব্যবহার করতে একটি ফাংশনাল কম্পোনেন্টের মধ্যে একটি হুক কল করতে হয়। উদাহরণস্বরূপ, useState হুক ব্যবহার করতে হলে, রিয়েক্ট কম্পোনেন্টে স্টেট ভেরিয়েবল এবং এর আপডেট করার জন্য একটি ফাংশন তৈরি করে নেয়। এখন যখন এই ফাংশনটি কল করা হয়, তখন রিয়েক্ট স্টেট বা অন্যান্য ফিচার কে সেট করে নেয় এবং কম্পোনেন্টের রি-রেন্ডার করে।
  <br>

একইভাবে, useEffect হুক ব্যবহার করলে, রিয়েক্ট কম্পোনেন্টে স্টেট বা প্রপস আপডেট হওয়ার পর একটি ফাংশন কল করা হয় যা কম্পোনেন্টের পুনরাবৃত্তি হওয়ার পর পুনরায় চালু হবে (যদি আপনি একটি ডিপেন্ডেন্সি এরে না সেট করে দেন)।

</details>

<details>
<summary>
 defferent state and props
</summary>
<br>
  
-  In React, state and props are two different concepts used to manage and pass data between components.
<br>

- State: State is used to manage the internal data of a component. It is mutable, meaning that it can be changed over time, and it is defined within the component itself. The useState hook is commonly used to define and update state within a functional component. When the state changes, the component is re-rendered to reflect the updated state.

- Props: Props (short for "properties") are used to pass data from a parent component to a child component. They are read-only and cannot be modified by the child component. Props are defined by the parent component and passed down to the child component as a set of key-value pairs. The child component can then use the props to render itself.
  <br>

- In summary, state is used to manage internal data within a component, while props are used to pass data from a parent component to a child component. State is mutable and defined within the component itself, while props are read-only and defined by the parent component.

- বাংলা ঃ React এ স্টেট(state) এবং প্রপস(props) দুটি ভিন্ন ধরনের ডাটা ম্যানেজমেন্ট করার জন্য ব্যবহৃত হয়।

- স্টেট(state): একটি কম্পোনেন্টের ভিতরে আপনি যে ডাটা ম্যানেজ করতে চান সেই ডাটার স্টেট নামক একটি প্রয়োজনীয় অংশ। স্টেট ব্যবহার করে আপনি কম্পোনেন্টের ভিতরে কোনো ডাটার পরিবর্তন হলে তা রেন্ডার করার জন্য রি-রেন্ডার করতে পারেন। স্টেট একটি মুটেবল(mutable) ডাটা টাইপ এবং সেটি কম্পোনেন্টের ভিতরেই ডিফাইন করতে হয়। স্টেটটি আপডেট করলে, কম্পোনেন্টটি আপডেট হবে এবং আপডেট হয়ে নতুন স্টেটের উপর নির্ভর করে রেন্ডার করা হবে।

- প্রপস(props) হলো একটি রিয়েক্ট কম্পোনেন্টের ভিতর থেকে অন্য একটি কম্পোনেন্টের ভিতরে ডাটা পাস করার একটি মাধ্যম। এটি একটি অবিকল্প অংশ যা রিডঅনলি(read-only) ডাটা হিসাবে কাজ করে এবং কম্পোনেন্টের ভিতর আর পরিবর্তন করা যায় না। একটি প্রপস ব্যবহার করে আপনি কম্পোনেন্টের বাইরে থেকে একটি স্ট্রিং, নাম্বার, অবজেক্ট, বুলিয়ান, ফাংশন এবং অন্যান্য ডাটা টাইপগুলি পাস করতে পারেন। প্রপস প্যারেন্ট কম্পোনেন্ট থেকে চাইলে একটি চাইল্ড কম্পোনেন্টে পাস করা যায় এবং এটি সম্পূর্ণভাবে কাস্টমাইজ করা যায়।
</details>

<details>
<summary>
 ভার্চুয়াল ডম  কি?

</summary>
<br > 
  
- ভার্চুয়াল ডম (Virtual DOM) হল একটি ডকুমেন্ট অবজেক্ট মডেল যা ব্রাউজারের ডম (DOM) স্ট্রাকচার সিমুলেশন করে। আসল ডমের মতোই ভার্চুয়াল ডমও হেয়ারকে লেআউট এবং রেন্ডারিং এর পরে আসল ডমে উপস্থাপন করা হয়।

React এ ভার্চুয়াল ডম এর ব্যবহার করা হয় ডম স্ট্রাকচারে কোন পরিবর্তন হলে সেই পরিবর্তনগুলি ভার্চুয়াল ডমে প্রথমে প্রয়োগ করা হয় এবং একটি ডিফারেন্ট এলিমেন্ট এর পাশাপাশি সেই ডিফারেন্ট স্টেট এর পরিবর্তন হওয়া নিশ্চিত হলে কেবলমাত্র পুনরাবৃত্তি করা হয়। এভাবে, রিএক্ট এর সমস্ত কম্পোনেন্ট পুনরাবৃত্তি করা যায় না, শুধু পরিবর্তনগুলি পুনরাবৃত্তি করা হয়।

</details>

<details>
<summary>
?

</summary>
<br >
  
-

</details>
