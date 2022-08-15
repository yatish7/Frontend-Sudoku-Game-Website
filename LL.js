
class Node
{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}
class LL
{
    constructor()
    {
        this.head=null;
        this.size=0;
    }
    addbeg(data)
    {
        var node=new Node(data);
        var cn;
        this.size++;
        if (this.head==null)
           this.head=node;
        else
        {
            cn=this.head;
            while(cn.next)
            {
                cn=cn.next
            }
            cn.next=node;
        }   
    }
    display()
    {
        var cn=this.head;
        while(cn){
            console.log(cn.data);
            cn=cn.next;
        }
    }
    length(){
        console.log(this.size);
    }
}

//MENU DRIVEN PROGRAM
L=new LL();
L.addbeg(19);
L.addbeg(20);
L.addbeg(21);
L.addbeg(22);
L.addbeg(23);
L.display();
