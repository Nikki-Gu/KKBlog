---
title: Java API整理
order: 2

copyright: <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0协议</a>
---



# 常用API

### 包的导入

```java
import java.io.*
import java.util.*
import java.lang.*
```



### List和Array的转换

1. `List.toArray(new int[0][0]);` 

   将List转换为数组，`int[0][0]`表示动态创建数组，不指定大小
   前提是List是：`List<int[]>`类型

2. `Arrays.asList() `是一个Java 的静态方法，它可以把一个数组或者多个参数转换成一个List 集合

   三数之和里面用到了：

   ```java
   Arrays.asList(nums[i], nums[l], nums[r]);
   ```

## List

https://itmyhome.com/java-api/java/util/List.html

1. `List<int[]> res = new ArrayList<>();`
2. `new List(track) `返回track的复制得到的新List
3. `add()`
4. `get(int Index)`
5. `remove(int Index)`
   - `remove(list.size() - 1)`
6. `size()`
7. 排序：`Collections.sort`



### LinkedList

1. `addLast`
2. `getLast`
3. `getFirst`
4. `removeFirst`
5. `removeLast`



## Arrays

1. `nums.length`

2. `System.arraycopy(numsrc, 0, numdst, 0, numsrc.length)`

   复制数组

3. `Arrays.sort(numsrc)`

   `Arrays.sort(int[] a, int fromIndex, int toIndex)` toIndex不参与排序

   排序数组

   比较器规则：

   ```
   int compare(T o1, T o2);
   返回的整数值有以下规则：
   o1, o2 返回负数。
   o2, o1 返回正数。
   ```

   只用记住按照参数顺序排列，需要返回负数即可！

4. `Arrays.toString()`

   将int[] 转换为String

   速度很慢

## String

1. 定义：`String s = new String('')` 

2. `length()`

3. `toCharArray()`变为可迭代对象

   ```for (char c : t.toCharArray()) ```

4. `charAt(index)`
5. `substring(left, right)` 返回的是左开右闭[left, right)



Sting和Char数组：

char[] 到String 可以直接`new String(char[] str)`

String到char[] 是 `s.toCharArray()`

### StringBuilder

1. 定义`StringBuilder sb = new StringBuilder("")`
2. 添加：`append('x')`
3. 删除：`deleteCharAt(index);`
4. `setCharAt(index, 'x')`
5. `reverse()`
6. `toString()`



## 队列

1. 队列`Queue`实现了一个先进先出（FIFO）的数据结构：

   - 通过`add()`/`offer()`方法将元素添加到队尾；
   - 通过`remove()`/`poll()`从队首获取元素并删除；
   - 通过`element()`/`peek()`从队首获取元素但不删除。

2. `LinkedList`即实现了`List`接口，又实现了`Queue`接口，但是，在使用的时候，如果我们把它当作List，就获取List的引用，如果我们把它当作Queue，就获取Queue的引用：

   ```
   // 这是一个List:
   List<String> list = new LinkedList<>();
   // 这是一个Queue:
   Queue<String> queue = new LinkedList<>();
   ```

3. PriorityQueue 优先级队列，基于优先级堆（最小堆）实现，基础操作如下：

   `Queue<Integer> q = new PriorityQueue<>();`

   API和Queue的相同
   
   `isEmpty()`
   
   `size()`
   
    在插入和删除操作后，`PriorityQueue` 会自动进行堆化操作，以保持堆的性质。
