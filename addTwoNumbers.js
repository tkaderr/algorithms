var addTwoNumbers = function(l1, l2) {
var listNode = [];
var index = 0;
function makeList(){
if (l1.val + l2.val < 10)
{
l1 == null ? listNode[index + 1] = l2.val :
(l2 == null ? listNode[index + 1] = l1.val :
listNode[index] = l1.val + l2.val)
}
else
{
listNode[index] = (l1.val + l2.val) - 10;
l1.next != null && l2.next == null ? l1.next.val += 1 : listNode[index + 1] = 1;
l2.next != null && l1.next == null? l2.next.val += 1 : listNode[index + 1] = 1;
if (l2.next != null && l1.next != null){
l1.next.val += 1;
}
}
l1.next != null ? l1 = l1.next : l1.val = 0;
l2.next != null ? l2 = l2.next : l2.val = 0;
index += 1;
}
while (l1.next != null || l2.next != null) {
makeList()
}
makeList();
return listNode;
};
